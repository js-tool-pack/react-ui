import React, { useEffect, useMemo } from 'react';
import type { PopoverProps } from './popover.types';
import {
  getComponentClass,
  useForceUpdate,
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
    attrs = {},
  } = props as RequiredPart<PopoverProps, keyof typeof defaultProps>;
  const rootName = getComponentClass(name);

  const forceUpdate = useForceUpdate();
  useEffect(() => {
    // 由于 createPortal 是立即执行的，而 ref 是异步才能获取到，导致 appendTo 拿不到正确的值，
    // 且 appendTo 切换时会丢失动画，所以需要额外刷新一次。
    // 默认的是 body，没有异步获取，所以不需要刷新
    // appendTo 为 null 也不需要刷新，只有根元素位置会变化才需要刷新
    if (appendTo === null || defaultProps.appendTo === appendTo) return;
    forceUpdate();
  }, []);

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

  if (appendTo === null) {
    return React.cloneElement(children, _props, children.props.children, Trans);
  }

  return (
    <>
      {React.cloneElement(children, _props)}
      {createPortal(Trans, appendTo())}
    </>
  );
});

Popover.defaultProps = defaultProps;
Popover.displayName = 'Popover';