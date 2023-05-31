import React, { memo, useRef } from 'react';
import { Transition } from '../transition/index';
import type { Mode } from '../transition/transition.types';
import { ChildStatus } from './transition-group.enums';
import { useDispatcher } from './transition-gorup.hooks';

const TransitionGroup: React.FC<{
  name?: string;
  mode?: Mode;
  children?: React.ReactElement[];
  appear?: boolean;
  tag?: keyof HTMLElementTagNameMap;
  className?: string;
}> = ({ mode, className, name, tag = 'div', ...props }): JSX.Element => {
  const containerRef = useRef<HTMLElement>(null);

  const [children, appear] = useDispatcher(
    containerRef,
    name,
    props.children,
    props.appear,
  );

  return React.createElement(
    tag,
    { ref: containerRef, className },
    children.map((child) => {
      return (
        <Transition
          name={name}
          mode={mode}
          appear={appear}
          key={child.component.key}
          on={child.on}>
          {child.status === ChildStatus.leave ? undefined : child.component}
        </Transition>
      );
    }),
  );
};
export default memo(TransitionGroup);
