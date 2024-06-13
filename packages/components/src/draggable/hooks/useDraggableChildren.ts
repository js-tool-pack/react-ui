import {
  DraggableGroupContextProvider,
  draggableContext,
} from '~/draggable/DraggableGroup';
import {
  useChildrenWithRefs,
  useFollowingRef,
  useForceUpdate,
} from '@pkg/shared';
import type { DOMAttributes, ReactElement, ReactNode, DragEvent } from 'react';
import React, { cloneElement, useContext, useRef } from 'react';
import { getClassNames, insertToArray } from '@tool-pack/basic';
import type { DraggableProps } from '~/draggable';
import { moveItem } from '../utils';
import { cls } from '../Draggable';

let times = 0;
export function useDraggableChildren({
  children: outerChildren,
  transition,
  onChange,
  list,
}: Pick<
  DraggableProps,
  'transition' | 'children' | 'onChange' | 'list'
>): ReactNode {
  const forceUpdate = useForceUpdate();
  const modifyChildrenRef = useFollowingRef(
    outerChildren,
    (v) => React.Children.map(v, (i) => i) || [],
  );
  const listRef = useFollowingRef(list, (v) => ({
    origin: v.slice(),
    modify: v.slice(),
  }));
  const { fromRef, toRef, type } = useContext(draggableContext);

  const stateRef = useRef<{ readonly id: symbol; index: number }>({
    id: Symbol(times++),
    index: -1,
  });

  const [children] = useChildrenWithRefs(
    modifyChildrenRef.current,
    (el, props, idx) => {
      const id = stateRef.current.id;
      const item = listRef.current.modify[idx];
      const emit = (): void => {
        // preverRef.current = null;
        if (isListChanged()) {
          const result = listRef.current.modify.slice();
          onChange?.(result);
        }
      };
      return cloneElement(el, {
        ...getDragSideEvents(),
        ...getReceiveSideEvents(),
        className: getClassNames(el.props.className, cls.__.item),
        draggable: el.props.draggable ?? true,
        ref: props.ref,
      });

      // 拖动目标元素事件
      function getDragSideEvents() {
        const left: DOMAttributes<HTMLElement> = {
          onDragStart: (e: DragEvent) => {
            const dataTransfer = e.dataTransfer as DataTransfer;
            // dataTransfer.setData('text', `draggable:${index}`);
            dataTransfer.effectAllowed = 'move';
            const from: DraggableGroupContextProvider = {
              drop(id2) {
                if (type === 'move' && id2 !== id) {
                  removeItem(item);
                }
                from.cancel = undefined;
                emit();
              },
              cancel(_id2): void {
                if (type === 'move') {
                  updateChildrenOf(el, listRef.current.modify.indexOf(item));
                }
              },
              children: el,
              item,
              id,
            };
            fromRef.current = from;
            // const target = e.currentTarget as HTMLElement;
            // target.classList.add(cls.__.ghost);
          },
          onDragEnd: (e: DragEvent) => {
            // const target = e.currentTarget as HTMLElement;
            // target.classList.remove(cls.__.ghost);
            toRef.current?.cancel?.(id);
            fromRef.current?.cancel?.(id);
            // emit();
            fromRef.current = null;
            toRef.current = null;
            stateRef.current.index = -1;
            e.preventDefault();
          },
        };
        return left;
      }
      // 接受拖动目标的元素的事件
      function getReceiveSideEvents() {
        const right: DOMAttributes<HTMLElement> = {
          // eslint-disable-next-line perfectionist/sort-objects
          onDrop: (e: DragEvent) => {
            // const dataTransfer = e.dataTransfer as DataTransfer;
            // const di = dataTransfer.getData('text').replace('draggable:', '');
            //
            // if (!di) return;
            // const from = Number(di);
            // dataTransfer.clearData();
            //
            // if (from === index) return;
            // move(from, index);
            e.preventDefault();
            stateRef.current.index = -1;

            const from = fromRef.current;
            if (!from) return;

            if (from.id !== id) from.drop?.(id);
            else if (!isListChanged()) {
              // 当在同一个组件拖动过但又没有实际变动时，刷新当前拖动项的选中状态
              updateChildrenOf(from.children, idx);
            }
            // 在同一个组件内拖拽的话 to = from
            // if (from.id !== toRef.current?.id) toRef.current?.drop?.(id);
            const to = toRef.current;
            if (to) to.cancel = undefined;
            fromRef.current = null;
            toRef.current = null;
            emit();
          },
          // eslint-disable-next-line perfectionist/sort-objects
          onDragEnterCapture(e: DragEvent): void {
            const index = listRef.current.modify.indexOf(item);
            const target = e.target as HTMLElement;
            e.preventDefault();

            if (
              index === stateRef.current.index ||
              el.props.draggable === false ||
              (transition && target.className.includes('move-active'))
            )
              return;

            const from = fromRef.current;
            const prever = toRef.current || from;
            if (!prever || !from) return;
            prever.enter?.(id);

            const fromIndex = listRef.current.modify.indexOf(from.item);
            if (from.item !== item) {
              if (prever.id === id || fromIndex !== -1) {
                let toIndex = index;
                const modifyChildren = modifyChildrenRef.current[
                  fromIndex
                ] as ReactElement;
                // move 返回之前隐藏的 children 位置，如果存在则 index - 1
                if (
                  type === 'move' &&
                  fromIndex !== -1 &&
                  fromIndex < index &&
                  modifyChildren.props.className.includes(cls['--'].hidden)
                ) {
                  toIndex--;
                }
                move(cloneAndAddClassName(from.children), fromIndex, toIndex);
              } else moveFromGroup(from.item, from.children, index);
            } else {
              updateChildrenOf(
                cloneAndAddClassName(
                  modifyChildrenRef.current[fromIndex] as ReactElement,
                ),
                fromIndex,
              );
            }
            // target.classList.remove(cls['--'].hidden);
            stateRef.current.index = index;
            toRef.current = {
              enter: (id2): void => {
                if (id2 !== id) {
                  stateRef.current.index = -1;
                  if (!listRef.current.origin.includes(from.item)) {
                    removeItem(from.item);
                  }
                  if (type === 'move') {
                    updateChildrenOf(
                      cloneAndAddClassName(from.children, cls['--'].hidden),
                      listRef.current.modify.indexOf(from.item),
                    );
                  }
                  return;
                }
                stateRef.current.index = -1;
              },
              cancel: (_id2): void => {
                stateRef.current.index = -1;
                if (!listRef.current.origin.includes(from.item)) {
                  removeItem(from.item);
                  toRef.current = null;
                } else {
                  const index = listRef.current.modify.indexOf(from.item);
                  // 还原成未加工状态
                  updateChildrenOf(from.children, index);
                }
              },
              drop: (_id2): void => {
                // if (toRef.current) toRef.current.cancel = undefined;
                // emit();
              },
              children: el,
              item,
              id,
            };
          },
          onDragOver(e: DragEvent) {
            if (el.props.draggable === false) return;
            e.preventDefault(); // 必须 preventDefault onDrop 才能被触发
          },
        };
        return right;
      }
    },
  );

  return children;

  function move(children: ReactElement, from: number, to: number) {
    // if (from === -1 || from === to) return;
    const temp = modifyChildrenRef.current.slice();
    temp[from] = children;
    moveItem(temp, from, to);
    modifyChildrenRef.current = temp;
    moveItem(listRef.current.modify, from, to);
    forceUpdate();
  }
  function moveFromGroup(item: unknown, children: ReactElement, to: number) {
    children = cloneAndAddClassName(children);
    const temp = modifyChildrenRef.current.slice();
    insertToArray(children, to, temp);
    modifyChildrenRef.current = temp;
    insertToArray(item, to, listRef.current.modify);
    forceUpdate();
  }
  function updateChildrenOf(children: ReactElement, index: number): void {
    const temp = modifyChildrenRef.current.slice();
    // 还原成未加工状态
    temp[index] = children;
    modifyChildrenRef.current = temp;
    forceUpdate();
  }
  function cloneAndAddClassName(
    element: ReactElement,
    className = cls.__.ghost,
  ): ReactElement {
    return cloneElement(element, {
      className: getClassNames(element.props.className, className),
    });
  }
  function removeItem(item: unknown): void {
    const index = listRef.current.modify.indexOf(item);
    if (index === -1) return;
    listRef.current.modify.splice(index, 1);

    const temp = modifyChildrenRef.current.slice();
    temp.splice(index, 1);
    modifyChildrenRef.current = temp;
    forceUpdate();
  }
  function isListChanged(): boolean {
    const { origin, modify } = listRef.current;
    return (
      origin.length !== modify.length ||
      origin.some((it, i) => it !== modify[i])
    );
  }
}
