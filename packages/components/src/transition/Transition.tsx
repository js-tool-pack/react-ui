import React, { memo } from 'react';
import { useDispatcher, useTransition } from './transition.hooks';
import type { Mode, CB } from './transition.types';

const Transition: React.FC<{
  // show?: boolean;
  name?: string;
  mode?: Mode;
  children?: JSX.Element;
  appear?: boolean;
  on?: CB;
}> = ({
  children,
  name = 'trans',
  mode = 'default' /* , show */,
  appear = false,
  ...props
}): React.ReactElement => {
  const [prev, next, prevStatus, nextStatus, handler] = useDispatcher(
    mode,
    // show,
    appear,
    children,
    props.on,
  );

  // const prevView = useTransition('prev', prevStatus, name, prev, onAfterCb);
  // const nextView = useTransition('next', nextStatus, name, next, onAfterCb);
  const prevView = useTransition(prevStatus, name, prev, handler);
  const nextView = useTransition(nextStatus, name, next, handler);

  return (
    <>
      {prevView}
      {nextView}
    </>
  );
};
export default memo(Transition);
