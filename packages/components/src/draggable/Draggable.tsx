// import EnUS from './locale/en-US';
import type { DraggableProps, DraggableFC } from './draggable.types';
// import { useLocale } from '~/config-provider/useLocale';
import type { RequiredPart } from '@tool-pack/types';
import { TransitionGroup } from '~/transition-group';
import { createElement, forwardRef } from 'react';
import { getClassNames } from '@tool-pack/basic';
import { useDraggableChildren } from './hooks';
import type { ReactElement, FC } from 'react';
import { getClasses } from '@pkg/shared';

export const cls = getClasses('draggable', ['ghost', 'item'], ['hidden']);
const defaultProps = {
  tag: 'div',
  list: [],
} satisfies Partial<DraggableProps>;

export const _Draggable: FC<DraggableProps> = forwardRef<
  HTMLDivElement,
  DraggableProps
>((props, ref) => {
  // const locale = useLocale('draggable', EnUS);
  const {
    transition,
    attrs = {},
    tag,
  } = props as RequiredPart<DraggableProps, keyof typeof defaultProps>;
  const children = useDraggableChildren(props);
  const className = getClassNames(cls.root, attrs.className);

  if (transition && children) {
    const transitionProps = transition === true ? undefined : transition;
    return (
      <TransitionGroup {...transitionProps} className={className} tag={tag}>
        {children as ReactElement[]}
      </TransitionGroup>
    );
  }

  if (tag === null) return children;
  return createElement(
    tag,
    {
      ...attrs,
      className,
      ref,
    },
    children,
  );
});

_Draggable.defaultProps = defaultProps;
_Draggable.displayName = 'Draggable';

export const Draggable = _Draggable as DraggableFC;
