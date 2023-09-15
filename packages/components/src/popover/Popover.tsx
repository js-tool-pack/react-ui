import {
  getComponentClass,
  useResizeEvent,
  useForwardRef,
  useAppendTo,
} from '@pkg/shared';
import {
  useResizeObserver,
  useShowController,
  usePosition,
} from './popover.hooks';
import {
  transitionCBAdapter,
  type TransitionCB,
  Transition,
} from '~/transition';
import type { RequiredPart } from '@tool-pack/types';
import type { PopoverProps } from './popover.types';
import { getClassNames } from '@tool-pack/basic';
import { WordBalloon } from '~/word-balloon';
import { createPortal } from 'react-dom';
import React, { useMemo } from 'react';

const defaultProps = {
  appendTo: () => document.body,
  placement: 'top',
  trigger: 'hover',
  name: 'popover',
  leaveDelay: 200,
  offset: 10,
  delay: 0,
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
    onVisibleChange,
    widthByTrigger,
    destroyOnHide,
    leaveDelay,
    attrs = {},
    placement,
    showArrow,
    disabled,
    children,
    appendTo,
    viewport,
    visible,
    trigger,
    content,
    offset,
    delay,
    name,
    on,
  } = props as PopoverRequiredPartProps;
  const rootName = getComponentClass(name);

  const [appendToTarget] = useAppendTo(appendTo, defaultProps.appendTo);

  const childrenRef = useForwardRef(
    (children as React.RefAttributes<unknown>).ref,
  ) as React.MutableRefObject<HTMLElement | null>;
  const [balloonRef, refreshBalloonRef] = useForwardRef(ref, true) as [
    React.MutableRefObject<HTMLDivElement>,
    () => void,
  ];

  const [refreshPosition, resetPlacement] = usePosition(
    childrenRef,
    balloonRef,
    {
      widthByTrigger,
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
      onVisibleChange,
      leaveDelay,
      children,
      disabled,
      visible,
      trigger,
      delay,
    },
  );

  useResizeObserver(show, balloonRef, refreshPosition);
  useResizeObserver(show, childrenRef, refreshPosition);
  useResizeEvent(show, refreshPosition);

  const Balloon = (
    <WordBalloon
      attrs={{
        ...attrs,
        className: getClassNames(rootName, attrs.className),
      }}
      ref={balloonRef as React.Ref<HTMLDivElement>}
      placement={placement}
      showArrow={showArrow}
      key="ballon"
    >
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
      onAfterLeave: resetPlacement,
      onBeforeEnter: refreshRef,
      onIdle: refreshRef,
    });
    return (el, status, lifeCircle) => {
      cb(el, status, lifeCircle);
      on?.(el, status, lifeCircle);
    };
  }, [refreshPosition]);

  const Trans = (
    <Transition
      appear={destroyOnHide ? undefined : null}
      show={destroyOnHide ? undefined : show}
      on={onTransitionChange}
      name={rootName}
    >
      {destroyOnHide ? show && Balloon : Balloon}
    </Transition>
  );

  const _props = {
    key: children.key || rootName,
    ref: childrenRef,
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
