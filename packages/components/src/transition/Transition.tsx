import { useDispatcher, useTransition } from '~/transition/hooks';
import type { TransitionProps } from './transition.types';
import type { RequiredPart } from '@tool-pack/types';
import React, { useRef, memo } from 'react';

let id = 1;
const defaultProps = {
  mode: 'default',
  name: 'trans',
  appear: false,
} satisfies Partial<TransitionProps>;

const Transition: React.FC<TransitionProps> = (props): React.ReactElement => {
  const cid = useRef<number>();
  if (!cid.current) cid.current = id++;

  const { children, appear, name, mode, show, on, ...rest } =
    props as RequiredPart<TransitionProps, keyof typeof defaultProps>;

  const [prev, next, prevStatus, nextStatus, handler] = useDispatcher(
    mode,
    show,
    appear,
    children,
  );

  const prevView = useTransition(prevStatus, name, prev, handler, on, rest);
  const nextView = useTransition(nextStatus, name, next, handler, on, rest);

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
Transition.defaultProps = defaultProps;

export default memo(Transition);
