import React, { useCallback, useRef } from 'react';
import type { TooltipProps } from './tooltip.types';
import { getComponentClass, useResizeEvent } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { WordBalloon } from '../word-balloon';
import { createPortal } from 'react-dom';
import {
  Transition,
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
  TransitionCB,
} from '../transition';
import {
  usePosition,
  useResizerObserver,
  useShowController,
} from '../popover/popover.hooks';

const rootName = getComponentClass('tooltip');

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    disabled,
    visible,
    trigger,
    placement,
    children,
    title,
    className,
    offset,
    appendTo,
    ...rest
  } = props as RequiredPart<TooltipProps, keyof typeof defaultProps>;
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
      {title}
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
} satisfies Partial<TooltipProps>;
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
