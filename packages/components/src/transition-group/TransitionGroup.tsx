import React, { memo, useRef } from 'react';
import { Transition } from '../transition/index';
import { ChildStatus } from './transition-group.enums';
import { useDispatcher } from './transition-gorup.hooks';
import { TransitionGroupProps } from './transition-group.types';

const TransitionGroup: React.FC<TransitionGroupProps> = (
  props,
): React.ReactElement => {
  const { mode, name, tag, appear, children, ...rest } = props;
  const containerRef = useRef<HTMLElement>(null);

  const [_children, _appear] = useDispatcher(
    containerRef,
    name,
    children,
    appear,
  );

  return React.createElement(
    tag as string,
    { ...rest, ref: containerRef },
    _children.map((child) => {
      return (
        <Transition
          name={name}
          mode={mode}
          appear={_appear}
          key={child.component.key}
          on={child.on}>
          {child.status === ChildStatus.leave ? undefined : child.component}
        </Transition>
      );
    }),
  );
};

TransitionGroup.defaultProps = { tag: 'div' };
TransitionGroup.displayName = 'TransitionGroup';

export default memo(TransitionGroup);
