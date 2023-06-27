import React, { memo } from 'react';
import { useDispatcher, useTransition } from './transition.hooks';
import type { TransitionProps } from './transition.types';
import type { RequiredPart } from '@tool-pack/types';

const Transition: React.FC<TransitionProps> = (props): React.ReactElement => {
  const { children, name, mode, appear, on, show } = props as RequiredPart<
    TransitionProps,
    'name' | 'mode' | 'appear'
  >;
  const [prev, next, prevStatus, nextStatus, handler] = useDispatcher(
    mode,
    show,
    appear,
    children,
  );

  const prevView = useTransition(prevStatus, name, prev, handler, on);
  const nextView = useTransition(nextStatus, name, next, handler, on);

  if (prevView && !nextView) return prevView;
  if (!prevView && nextView) return nextView;

  return (
    <>
      {prevView}
      {nextView}
    </>
  );
};

Transition.displayName = 'Transition';
Transition.defaultProps = {
  name: 'trans',
  mode: 'default',
  appear: false,
};

export default memo(Transition);
