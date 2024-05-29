import { useForceUpdate, useForwardRef, getClasses } from '@pkg/shared';
import type { DraggableProps, DraggableFC } from './draggable.types';
// import EnUS from './locale/en-US';
import React, { useEffect, Children, useRef } from 'react';
// import { useLocale } from '~/config-provider/useLocale';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import children from '~/timeline/demo/children';
import { moveItem, drag } from './utils';

const cls = getClasses('draggable', ['ghost'], []);
const defaultProps = {} satisfies Partial<DraggableProps>;

export const _Draggable: React.FC<DraggableProps> = React.forwardRef<
  HTMLDivElement,
  DraggableProps
>((props, outerRef) => {
  // const locale = useLocale('draggable', EnUS);
  const {
    children: outerChildren,
    attrs = {},
    list = [],
    onChange,
  } = props as RequiredPart<DraggableProps, keyof typeof defaultProps>;
  const ref = useForwardRef(outerRef);
  const forceUpdate = useForceUpdate();

  const childrenRef = useRef<React.ReactNode[]>(
    Children.toArray(outerChildren),
  );
  const listRef = useRef(list);

  useEffect(() => {
    listRef.current = list;
    childrenRef.current = Children.toArray(outerChildren);
    forceUpdate();
    return drag(
      ref,
      cls.__.ghost,
      (prevIndex, currIndex) => {
        moveItem(childrenRef.current, prevIndex, currIndex);
        moveItem(listRef.current, prevIndex, currIndex);
        forceUpdate();
      },
      (prevIndex, currIndex) => {
        moveItem(listRef.current, prevIndex, currIndex);
        onChange?.(listRef.current.slice());
      },
    );
  }, [children, list, ref]);

  return (
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className)}
      ref={ref}
    >
      {childrenRef.current}
    </div>
  );
});

_Draggable.defaultProps = defaultProps;
_Draggable.displayName = 'Draggable';

export const Draggable = _Draggable as DraggableFC;
