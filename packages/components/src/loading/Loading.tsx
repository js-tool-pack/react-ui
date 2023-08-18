import { LoadingProps } from './loading.types';
import React, { useCallback, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  Transition,
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
} from '~/transition';
import { getClasses, useScrollLock, useVisible, Z_INDEX } from '@pkg/shared';
import { Loading as LoadingIcon } from '@pkg/icons';
import { Icon } from '~/icon';
import { getClassNames } from '@tool-pack/basic';
import { RequiredPart } from '@tool-pack/types';

const cls = getClasses(
  'loading',
  ['ref', 'wrapper', 'box', 'icon', 'text'],
  [],
);

const defaultProps = {
  background: 'var(--t-mask-bg-color)',
  // color: 'var(--t-text-color)',
  mode: 'insert',
  zIndex: Z_INDEX,
  text: 'loading...',
} satisfies Partial<LoadingProps>;

/**
 * loading组件
 */
export const Loading: React.FC<LoadingProps> = (props) => {
  const {
    attrs = {},
    zIndex,
    color,
    background,
    closeOnClick,
    mode,
    onClose,
    onLeave,
    icon,
    children,
    text,
    visible: outerVisible,
    wrapperAttrs = {},
  } = props as RequiredPart<LoadingProps, keyof typeof defaultProps>;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [visible, hide] = useVisible(outerVisible);

  const getContainer = useCallback(() => {
    return !children ? document.body : wrapperRef.current || undefined;
  }, [children]);
  useScrollLock(visible, getContainer);

  const closeLoading: React.MouseEventHandler<HTMLElement> = (e) => {
    attrs.onClick?.(e);
    if (!closeOnClick) return;
    onClose?.();
    hide();
  };

  const LoadingBody = (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      {...attrs}
      onClick={closeLoading}
      className={getClassNames(cls.root, attrs.className, attrs.className)}
      style={{
        ...attrs.style,
        background: background,
        zIndex: zIndex,
        color: color,
      }}>
      <div className={cls.__.box}>
        {icon !== null && (
          <div className={cls.__.icon}>
            <Icon size={38}>{icon || <LoadingIcon />}</Icon>
          </div>
        )}
        <div className={cls.__.text}>{text}</div>
      </div>
    </div>
  );

  const TransitionLoading = useMemo(
    () => (
      <Transition
        name={cls.root}
        appear={true}
        on={(_el, status, lifeCircle) =>
          lifeCircle === TRANSITION_LIFE_CIRCLE.after &&
          status === TRANSITION_STATUS.hide &&
          onLeave?.()
        }>
        {visible && LoadingBody}
      </Transition>
    ),
    [visible, onLeave],
  );

  // 没有children传到body下
  if (!children) return createPortal(TransitionLoading, document.body);

  // 插入children
  // 当传入的children是非html元素时，不使用插入模式
  if (mode === 'insert' && React.isValidElement(children))
    return React.cloneElement(
      children,
      {
        ...children.props,
        ref: wrapperRef,
        className: getClassNames(children.props.className, cls.__.ref),
      },
      children.props.children,
      TransitionLoading,
    );

  // 包裹children
  return (
    <div
      {...wrapperAttrs}
      ref={wrapperRef}
      className={getClassNames(cls.__.wrapper, wrapperAttrs.className)}>
      {children}
      {TransitionLoading}
    </div>
  );
};

Loading.defaultProps = defaultProps;
Loading.displayName = 'Loading';
