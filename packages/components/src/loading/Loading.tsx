import { LoadingProps } from './loading.types';
import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Transition,
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
} from '~/transition';
import { getComponentClass, Z_INDEX } from '@pkg/shared';
import { Loading as LoadingIcon } from '@pkg/icons';
import { Icon } from '~/icon';
import { getClassNames } from '@tool-pack/basic';
import { RequiredPart } from '@tool-pack/types';

const rootClass = getComponentClass('loading');
const refClass = `${rootClass}__ref`;

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
    visible,
  } = props as RequiredPart<LoadingProps, keyof typeof defaultProps>;
  const [show, setShow] = useState(visible);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  const closeLoading: React.MouseEventHandler<HTMLElement> = (e) => {
    attrs.onClick?.(e);
    if (!closeOnClick) return;
    onClose?.();
    setShow(false);
  };

  const LoadingBody = (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      {...attrs}
      onClick={closeLoading}
      className={getClassNames(rootClass, attrs.className, attrs.className)}
      style={{
        ...attrs.style,
        background: background,
        zIndex: zIndex,
        color: color,
      }}>
      <div className={`${rootClass}__box`}>
        {icon !== null && (
          <div className={`${rootClass}__icon`}>
            <Icon size={38}>{icon || <LoadingIcon />}</Icon>
          </div>
        )}
        <div className={`${rootClass}__text`}>{text}</div>
      </div>
    </div>
  );

  const TransitionLoading = useMemo(
    () => (
      <Transition
        name={rootClass}
        appear={true}
        on={(_el, status, lifeCircle) =>
          lifeCircle === TRANSITION_LIFE_CIRCLE.after &&
          status === TRANSITION_STATUS.hide &&
          onLeave?.()
        }>
        {show && LoadingBody}
      </Transition>
    ),
    [show, onLeave],
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
        className: getClassNames(children.props.className, refClass),
      },
      children.props.children,
      TransitionLoading,
    );

  // 包裹children
  return (
    <div className={refClass}>
      {children}
      {TransitionLoading}
    </div>
  );
};

Loading.defaultProps = defaultProps;
Loading.displayName = 'Loading';
