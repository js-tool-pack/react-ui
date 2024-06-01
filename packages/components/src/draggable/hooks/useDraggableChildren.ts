import {
  useChildrenWithRefs,
  useFollowingRef,
  useForceUpdate,
} from '@pkg/shared';
import { cloneElement, ReactNode, Children, useRef } from 'react';
import type { DraggableProps } from '../draggable.types';
import { getClassNames } from '@tool-pack/basic';
import { moveItem } from '../utils';
import { cls } from '../Draggable';

export function useDraggableChildren({
  children: outerChildren,
  onChange,
  list,
}: Pick<DraggableProps, 'children' | 'onChange' | 'list'>): ReactNode {
  const forceUpdate = useForceUpdate();
  const childrenRef = useFollowingRef(outerChildren, (v) =>
    Children.toArray(v),
  );
  const listRef = useFollowingRef(list, (v) => v.slice());
  const chosenRef = useRef<{
    overIndex: number;
    index: number;
    item: any;
  } | null>(null);

  const [children] = useChildrenWithRefs(
    childrenRef.current,
    (el, props, index) => {
      return cloneElement(el, {
        // 拖动目标元素事件
        onDragStart: (e: DragEvent) => {
          const dataTransfer = e.dataTransfer as DataTransfer;
          // dataTransfer.setData('text', `draggable:${index}`);
          dataTransfer.effectAllowed = 'move';
          chosenRef.current = {
            item: listRef.current[index],
            overIndex: index,
            index,
          };
          const el = e.currentTarget as HTMLElement;
          el.classList.add(cls.__.ghost);
        },
        onDragEnd: (e: DragEvent) => {
          const el = e.currentTarget as HTMLElement;
          el.classList.remove(cls.__.ghost);
        },
        // 接受拖动目标的元素的事件
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
          if (list.some((it, i) => it !== listRef.current[i]))
            onChange?.(listRef.current.slice());
          e.preventDefault();
        },
        onDragEnter: () => {
          const chosen = chosenRef.current;
          if (
            !chosen ||
            chosen.overIndex === index ||
            el.props.draggable === false
          )
            return;

          move(chosen.index, index);
          chosen.overIndex = index;
          chosen.index = index;
        },
        onDragOver(e: DragEvent) {
          if (el.props.draggable === false) return;
          e.preventDefault(); // 必须 preventDefault onDrop 才能被触发
        },
        className: getClassNames(el.props.className, cls.__.item),
        draggable: el.props.draggable ?? true,
        ref: props.ref,
      });
    },
  );

  return children;

  function move(from: number, to: number) {
    if (from === to) return;
    const temp = childrenRef.current.slice();
    moveItem(temp, from, to);
    childrenRef.current = temp;
    moveItem(listRef.current, from, to);
    forceUpdate();
  }
}
