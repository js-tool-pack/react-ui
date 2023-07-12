import React, { useCallback, useRef } from 'react';
import type { PopoverProps } from './popover.types';
import { getComponentClass, useResizeEvent } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import {
  usePosition,
  useResizerObserver,
  useShowController,
} from './popover.hooks';
import { createPortal } from 'react-dom';
import { WordBalloon } from '../word-balloon';
import {
  Transition,
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
  TransitionCB,
} from '../transition';

const rootName = getComponentClass('popover');

export const Popover: React.FC<PopoverProps> = (props) => {
  const {
    disabled,
    visible,
    trigger,
    placement,
    children,
    content,
    className,
    offset,
    appendTo,
    ...rest
  } = props as RequiredPart<PopoverProps, keyof typeof defaultProps>;
  const childrenRef = useRef<HTMLElement>(null);
  const balloonRef = useRef<HTMLDivElement>();
  const [refreshPosition, resetPlacement] = usePosition(
    placement,
    childrenRef,
    balloonRef,
    appendTo,
    offset,
  );
  const show = useShowController(
    disabled,
    visible,
    trigger,
    children,
    childrenRef,
    balloonRef,
    refreshPosition,
  );

  useResizerObserver(show, balloonRef, refreshPosition);
  useResizeEvent(show, refreshPosition);

  const Balloon = (
    <WordBalloon
      {...rest}
      key="ballon"
      placement={placement}
      ref={balloonRef as React.Ref<HTMLDivElement>}
      className={getClassNames(rootName, className)}>
      {content}
    </WordBalloon>
  );

  const onTransitionChange = useCallback<TransitionCB>(
    (el, status, lifeCircle) => {
      if (
        [TRANSITION_STATUS.show, TRANSITION_STATUS.idle].includes(status) &&
        TRANSITION_LIFE_CIRCLE.ready === lifeCircle
      ) {
        balloonRef.current = el as HTMLDivElement;
        refreshPosition();
        return;
      }
      if (
        TRANSITION_STATUS.hide === status &&
        TRANSITION_LIFE_CIRCLE.after === lifeCircle
      ) {
        resetPlacement();
      }
    },
    [],
  );

  return (
    <>
      {React.cloneElement(children, {
        ref: childrenRef,
        key: children.key || rootName,
      })}
      {createPortal(
        <Transition
          name={rootName}
          show={show}
          on={onTransitionChange}
          appear={null}>
          {Balloon}
        </Transition>,
        appendTo(),
      )}
    </>
  );
};

const defaultProps = {
  placement: 'top',
  trigger: 'hover',
  offset: 10,
  appendTo: () => document.body,
} satisfies Partial<PopoverProps>;
Popover.defaultProps = defaultProps;
Popover.displayName = 'Popover';
