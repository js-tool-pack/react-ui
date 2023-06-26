import React, { memo } from 'react';
import { useDispatcher, useTransition } from './transition.hooks';
import type { TransitionProps } from './transition.types';

const Transition: React.FC<TransitionProps> = ({
  children,
  name = 'trans',
  mode = 'default' /* , show */,
  appear = false,
  on,
}): React.ReactElement => {
  const [prev, next, prevStatus, nextStatus, handler] = useDispatcher(
    mode,
    // show,
    appear,
    children,
  );

  // const prevView = useTransition('prev', prevStatus, name, prev, onAfterCb);
  // const nextView = useTransition('next', nextStatus, name, next, onAfterCb);
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
export default memo(Transition);
