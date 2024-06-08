import {
  type DraggableGroupContextProvider,
  draggableContext,
} from '~/draggable/DraggableGroup';
import {
  useChildrenWithRefs,
  useFollowingRef,
  useForceUpdate,
} from '@pkg/shared';
import type { DOMAttributes, ReactElement, ReactNode, DragEvent } from 'react';
import { cloneElement, useContext, Children, useRef } from 'react';
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
  const childrenRef = useFollowingRef(
    outerChildren,
    (v) => Children.map(v, (i) => i) || [],
  );
  const listRef = useFollowingRef(list, (v) => v.slice());
  const { fromRef, toRef } = useContext(draggableContext);

  const preverRef = useRef<DraggableGroupContextProvider | null>(null);
  const stateRef = useRef<{ readonly id: symbol; index: number }>({
    id: Symbol(times++),
    index: -1,
  });

  const [children] = useChildrenWithRefs(
    childrenRef.current,
    (el, props, idx) => {
      const id = stateRef.current.id;
      const item = listRef.current[idx];
      const emit = (): void => {
        console.log('emit', stateRef.current.id, preverRef.current);
        // preverRef.current = null;
        if (isListChanged()) {
          const result = listRef.current.slice();
          console.log('onchange', result);
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
          onDragEnd: (e: DragEvent) => {
            const target = e.currentTarget as HTMLElement;
            target.classList.remove(cls.__.ghost);
            console.log('onDragEnd', item, target);
            toRef.current?.cancel?.(id);
            emit();
            fromRef.current = null;
            toRef.current = null;
            stateRef.current.index = -1;
            e.preventDefault();
          },
          onDragStart: (e: DragEvent) => {
            const dataTransfer = e.dataTransfer as DataTransfer;
            // dataTransfer.setData('text', `draggable:${index}`);
            dataTransfer.effectAllowed = 'move';
            fromRef.current = { children: el, item, id };
            const target = e.currentTarget as HTMLElement;
            target.classList.add(cls.__.ghost);
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
            console.log('onDrop');
            e.preventDefault();
            stateRef.current.index = -1;

            const from = fromRef.current;
            if (!from) return;

            if (from.id !== id) from.drop?.(id);
            // 在同一个组件内拖拽的话 to = from
            // if (from.id !== toRef.current?.id) toRef.current?.drop?.(id);
            const to = toRef.current;
            if (to) to.cancel = undefined;
            emit();
          },
          // eslint-disable-next-line perfectionist/sort-objects
          onDragEnterCapture(e: DragEvent): void {
            const index = listRef.current.indexOf(item);
            console.log('enter', index, stateRef.current.index);
            const target = e.target as HTMLElement;
            e.preventDefault();

            if (
              index === stateRef.current.index ||
              el.props.draggable === false ||
              (transition && target.className.includes('move-active'))
            )
              return;

            const from = fromRef.current;
            const prever = (preverRef.current = toRef.current || from);
            console.log(prever);
            if (!prever || !from) return;
            console.log(item, from.item);
            prever.enter?.(id);

            console.log(prever.id, id, prever.id === id);
            const fromIndex = listRef.current.indexOf(from.item);
            if (from.item !== item) {
              if (prever.id === id || fromIndex !== -1) move(fromIndex, index);
              else moveFromGroup(from.item, from.children, index);
            } else {
              console.log('uuuuuuuuuuup');
              updateChildrenOf(
                cloneAndAddGhostClassName(
                  childrenRef.current[fromIndex] as ReactElement,
                ),
                fromIndex,
              );
            }
            // target.classList.remove(cls['--'].hidden);
            stateRef.current.index = index;
            toRef.current = {
              enter: (id2): void => {
                console.log('id===id', id2 === id);
                if (id2 !== id) {
                  stateRef.current.index = -1;
                  if (!list.includes(from.item)) {
                    removeItem(from.item);
                  }
                  // if (item === _item && type === 'move') {
                  //   console.log('mmmmmove');
                  //   // target.classList.add(cls['--'].hidden);
                  //   removeItem(_item);
                  // }
                }
              },
              cancel: (_id2): void => {
                console.log('oncancel', id, _id2, prever.id, target);
                stateRef.current.index = -1;
                if (!list.includes(from.item)) {
                  removeItem(from.item);
                  preverRef.current = null;
                } else {
                  console.log('ccccccccccccc');
                  const index = listRef.current.indexOf(from.item);
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
            console.log('-'.repeat(20));
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

  function move(from: number, to: number) {
    if (from === -1 || from === to) return;
    const temp = childrenRef.current.slice();
    temp[from] = cloneAndAddGhostClassName(temp[from] as ReactElement);
    moveItem(temp, from, to);
    childrenRef.current = temp;
    moveItem(listRef.current, from, to);
    forceUpdate();
  }
  function moveFromGroup(item: unknown, children: ReactElement, to: number) {
    console.log('moveFromGroup', item, to, item);
    children = cloneAndAddGhostClassName(children);
    const temp = childrenRef.current.slice();
    insertToArray(children, to, temp);
    childrenRef.current = temp;
    insertToArray(item, to, listRef.current);
    forceUpdate();
  }
  function updateChildrenOf(children: ReactElement, index: number): void {
    const temp = childrenRef.current.slice();
    // 还原成未加工状态
    temp[index] = children;
    childrenRef.current = temp;
    forceUpdate();
  }
  function cloneAndAddGhostClassName(element: ReactElement): ReactElement {
    return cloneElement(element, {
      className: getClassNames(element.props.className, cls.__.ghost),
    });
  }
  function removeItem(item: unknown): void {
    const index = listRef.current.indexOf(item);
    if (index === -1) return;
    listRef.current.splice(index, 1);

    const temp = childrenRef.current.slice();
    temp.splice(index, 1);
    childrenRef.current = temp;
    forceUpdate();
  }
  function isListChanged(): boolean {
    return (
      list.length !== listRef.current.length ||
      list.some((it, i) => it !== listRef.current[i])
    );
  }
}
