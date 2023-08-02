import React, { useEffect, useMemo, useRef } from 'react';
import type { PopoverProps } from './popover.types';
import { getComponentClass, useForceUpdate, useResizeEvent } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import {
  usePosition,
  useResizeObserver,
  useShowController,
} from './popover.hooks';
import { createPortal } from 'react-dom';
import { WordBalloon } from '~/word-balloon';
import {
  Transition,
  type TransitionCB,
  transitionCBAdapter,
} from '~/transition';

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
    on,
    appendTo,
    ...rest
  } = props as RequiredPart<PopoverProps, keyof typeof defaultProps>;
  const rootName = getComponentClass(name);

  const forceUpdate = useForceUpdate();
  useEffect(() => {
    // 由于 createPortal 是立即执行的，而 ref 是异步才能获取到，导致 appendTo 拿不到正确的值，
    // 且 appendTo 切换时会丢失动画，所以需要额外刷新一次。
    // 默认的是 body，没有异步获取，所以不需要刷新
    if (defaultProps.appendTo === appendTo) return;
    forceUpdate();
  }, []);

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

  const onTransitionChange = useMemo<TransitionCB>(() => {
    const refreshRef = (el: HTMLElement) => {
      balloonRef.current = el as HTMLDivElement;
      refreshPosition();
    };
    const cb = transitionCBAdapter({
      onEnterReady: refreshRef,
      onIdle: refreshRef,
      onAfterLeave: resetPlacement,
    });
    return (el, status, lifeCircle) => {
      cb(el, status, lifeCircle);
      on?.(el, status, lifeCircle);
    };
  }, [refreshPosition]);

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
