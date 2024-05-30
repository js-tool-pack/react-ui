// import EnUS from './locale/en-US';
import type { DraggableProps, DraggableFC } from './draggable.types';
import { createElement, forwardRef, FC } from 'react';
// import { useLocale } from '~/config-provider/useLocale';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { useDraggableChildren } from './hooks';
import { getClasses } from '@pkg/shared';

export const cls = getClasses('draggable', ['ghost', 'item'], []);
const defaultProps = {
  tag: 'div',
  list: [],
} satisfies Partial<DraggableProps>;

export const _Draggable: FC<DraggableProps> = forwardRef<
  HTMLDivElement,
  DraggableProps
>((props, ref) => {
  // const locale = useLocale('draggable', EnUS);
  const { attrs = {}, tag } = props as RequiredPart<
    DraggableProps,
    keyof typeof defaultProps
  >;
  const children = useDraggableChildren(props);

  if (tag === null) return children;
  return createElement(
    tag,
    {
      ...attrs,
      className: getClassNames(cls.root, attrs.className),
      ref,
    },
    children,
  );
});

_Draggable.defaultProps = defaultProps;
_Draggable.displayName = 'Draggable';

export const Draggable = _Draggable as DraggableFC;
