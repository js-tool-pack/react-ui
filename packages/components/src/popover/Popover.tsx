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

export type PopoverRequiredPartProps = RequiredPart<
  PopoverProps,
  keyof typeof defaultProps
>;

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
    onVisibleChange,
    attrs = {},
  } = props as PopoverRequiredPartProps;
  const rootName = getComponentClass(name);

  const [appendToTarget] = useAppendTo(appendTo, defaultProps.appendTo);

  const childrenRef = useForwardRef(kidRef);
  const [balloonRef, refreshBalloonRef] = useForwardRef(ref, true) as [
    React.MutableRefObject<HTMLDivElement>,
    () => void,
  ];

  const [refreshPosition, resetPlacement] = usePosition(
    childrenRef,
    balloonRef,
    {
      placement,
      viewport,
      appendTo,
      offset,
    },
  );
  const show = useShowController(
    childrenRef,
    balloonRef,
    refreshPosition,
    // 下面👇的对象属性都是在 props 中取的，为什么不直接传 props ？
    // 因为这样在上面的 props 解构中就可以直观的看出到底有哪些属性是没有用到的；传 props 是不直观的。
    // 如果看到没有按照这条规则弄的，那就是漏掉了，以该条规则为准。
    {
      delay,
      visible,
      trigger,
      children,
      disabled,
      leaveDelay,
      onVisibleChange,
    },
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
      onBeforeEnter: refreshRef,
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
