// import EnUS from './locale/en-US';
import type { DraggableProps, DraggableFC } from './draggable.types';
import { mergeReactDefaultProps, getClasses } from '@pkg/shared';
// import { useLocale } from '~/config-provider/useLocale';
import { TransitionGroup } from '~/transition-group';
import { createElement, forwardRef } from 'react';
import { getClassNames } from '@tool-pack/basic';
import { useDraggableChildren } from './hooks';
import type { ReactElement } from 'react';

export const cls = getClasses('draggable', ['ghost', 'item'], ['hidden']);
const defaultProps = {
  tag: 'div',
  list: [],
} satisfies Partial<DraggableProps>;

export const _Draggable = forwardRef<HTMLDivElement, DraggableProps>(
  (props, ref) => {
    // const locale = useLocale('draggable', EnUS);
    const {
      transition,
      attrs = {},
      tag,
    } = (props = mergeReactDefaultProps(props, defaultProps));
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
  },
);

_Draggable.displayName = 'Draggable';

export const Draggable = _Draggable as DraggableFC;
