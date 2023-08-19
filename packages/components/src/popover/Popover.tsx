import React, { useMemo } from 'react';
import type { PopoverProps } from './popover.types';
import {
  getComponentClass,
  useAppendTo,
  useForwardRef,
  useResizeEvent,
} from '@pkg/shared';
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

const defaultProps = {
  placement: 'top',
  trigger: 'hover',
  offset: 10,
  name: 'popover',
  appendTo: () => document.body,
  delay: 0,
  leaveDelay: 200,
} satisfies Partial<PopoverProps>;

export const Popover: React.FC<PopoverProps> = React.forwardRef<
  HTMLDivElement,
  PopoverProps
>((props, ref) => {
  const {
    disabled,
    visible,
    trigger,
    placement,
    children,
    content,
    offset,
    destroyOnHide,
    name,
    on,
    appendTo,
    viewport,
    childrenRef: kidRef,
    showArrow,
    delay,
    leaveDelay,
    attrs = {},
  } = props as RequiredPart<PopoverProps, keyof typeof defaultProps>;
  const rootName = getComponentClass(name);

  const [appendToTarget] = useAppendTo(appendTo, defaultProps.appendTo);

  const childrenRef = useForwardRef(kidRef);
  const [balloonRef, refreshBalloonRef] = useForwardRef(ref, true) as [
    React.MutableRefObject<HTMLDivElement>,
    () => void,
  ];

  const [refreshPosition, resetPlacement] = usePosition(
    placement,
    childrenRef,
    balloonRef,
    appendTo,
    offset,
    viewport,
  );
  const show = useShowController(
    disabled,
    visible,
    trigger,
    children,
    childrenRef,
    balloonRef,
    refreshPosition,
    delay,
    leaveDelay,
  );

  useResizeObserver(show, balloonRef, refreshPosition);
  useResizeEvent(show, refreshPosition);

  const Balloon = (
    <WordBalloon
      key="ballon"
      placement={placement}
      showArrow={showArrow}
      ref={balloonRef as React.Ref<HTMLDivElement>}
      attrs={{
        ...attrs,
        className: getClassNames(rootName, attrs.className),
      }}>
      {content}
    </WordBalloon>
  );
  const onTransitionChange = useMemo<TransitionCB>(() => {
    const refreshRef = (el: HTMLElement) => {
      balloonRef.current = el as HTMLDivElement;
      refreshBalloonRef();
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

  const Trans = (
    <Transition
      name={rootName}
      show={destroyOnHide ? undefined : show}
      on={onTransitionChange}
      appear={destroyOnHide ? undefined : null}>
      {destroyOnHide ? show && Balloon : Balloon}
    </Transition>
  );

  const _props = {
    ref: childrenRef,
    key: children.key || rootName,
  };

  if (appendToTarget === null) {
    return React.cloneElement(children, _props, children.props.children, Trans);
  }

  return (
    <>
      {React.cloneElement(children, _props)}
      {createPortal(Trans, appendToTarget)}
    </>
  );
});

Popover.defaultProps = defaultProps;
Popover.displayName = 'Popover';
