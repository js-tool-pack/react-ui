import {
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
  Transition,
} from '~/transition';
import { useScrollLock, getClasses, useVisible, Z_INDEX } from '@pkg/shared';
import React, { useCallback, useMemo, useRef } from 'react';
import { useLocale } from '~/config-provider/useLocale';
import { Loading as LoadingIcon } from '@pkg/icons';
import { getClassNames } from '@tool-pack/basic';
import { RequiredPart } from '@tool-pack/types';
import { LoadingProps } from './loading.types';
import EnUS from '~/loading/locale/en-US';
import { createPortal } from 'react-dom';
import { Icon } from '~/icon';

const cls = getClasses(
  'loading',
  ['ref', 'wrapper', 'box', 'icon', 'text'],
  [],
);

const defaultProps = {
  background: 'var(--t-mask-bg-color)',
  zIndex: Z_INDEX,
  // color: 'var(--t-text-color)',
  mode: 'insert',
} satisfies Partial<LoadingProps>;

/**
 * loading组件
 */
export const Loading: React.FC<LoadingProps> = (props) => {
  const locale = useLocale('loading', EnUS);
  const {
    visible: outerVisible,
    text = locale.text,
    wrapperAttrs = {},
    closeOnClick,
    attrs = {},
    background,
    children,
    onClose,
    onLeave,
    zIndex,
    color,
    mode,
    icon,
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
      style={{
        ...attrs.style,
        background: background,
        zIndex: zIndex,
        color: color,
      }}
      className={getClassNames(cls.root, attrs.className, attrs.className)}
      onClick={closeLoading}
    >
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
        on={(_el, status, lifeCircle) =>
          lifeCircle === TRANSITION_LIFE_CIRCLE.after &&
          status === TRANSITION_STATUS.hide &&
          onLeave?.()
        }
        name={cls.root}
        appear={true}
      >
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
        className: getClassNames(children.props.className, cls.__.ref),
        ref: wrapperRef,
      },
      children.props.children,
      TransitionLoading,
    );

  // 包裹children
  return (
    <div
      {...wrapperAttrs}
      className={getClassNames(cls.__.wrapper, wrapperAttrs.className)}
      ref={wrapperRef}
    >
      {children}
      {TransitionLoading}
    </div>
  );
};

Loading.defaultProps = defaultProps;
Loading.displayName = 'Loading';
