import React, { useCallback, useRef } from 'react';
import type { PopoverProps } from './popover.types';
import { getComponentClass, useResizeEvent } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import {
  usePosition,
  useResizeObserver,
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
    destroyOnHide,
    name,
    appendTo,
    ...rest
  } = props as RequiredPart<PopoverProps, keyof typeof defaultProps>;
  const rootName = getComponentClass(name);

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

  useResizeObserver(show, balloonRef, refreshPosition);
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
          show={destroyOnHide ? undefined : show}
          on={onTransitionChange}
          appear={destroyOnHide ? undefined : null}>
          {destroyOnHide ? show && Balloon : Balloon}
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
  name: 'popover',
  appendTo: () => document.body,
} satisfies Partial<PopoverProps>;
Popover.defaultProps = defaultProps;
Popover.displayName = 'Popover';
