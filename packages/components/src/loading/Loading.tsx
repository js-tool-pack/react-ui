import { LoadingIcon } from './loading.icon';
import { LoadingProps } from './loading.types';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Transition,
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
} from '../transition';
import { getComponentClass } from '@pkg/shared';

const rootClass = getComponentClass('loading');
const refClass = `${rootClass}__ref`;

/**
 * loading组件
 */
export const Loading: React.FC<LoadingProps> = memo((props) => {
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);

  const closeLoading = () => {
    if (!props.closeOnClick) return;
    props.onClose?.();
    setVisible(false);
  };

  const LoadingBody = (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={closeLoading}
      className={`${rootClass} ${props.className}`}
      style={{
        background: props.background,
        zIndex: props.zIndex,
        color: props.color,
      }}>
      <div className="loading-box">
        <div className="loading-icon">{props.icon}</div>
        <div className="loading-text">{props.text}</div>
      </div>
    </div>
  );

  const TransitionLoading = useMemo(
    () => (
      <Transition
        name="loading"
        appear={true}
        on={(_el, status, lifeCircle) =>
          lifeCircle === TRANSITION_LIFE_CIRCLE.after &&
          status === TRANSITION_STATUS.hide &&
          props.onLeave?.()
        }>
        {visible && LoadingBody}
      </Transition>
    ),
    [visible, props.onLeave],
  );

  // 没有children传到body下
  if (!props.children) return createPortal(TransitionLoading, document.body);

  // 插入children
  // 当传入的children是非html元素时，不使用插入模式
  if (props.mode === 'insert' && React.isValidElement(props.children))
    return React.cloneElement(
      props.children,
      {
        ...props.children.props,
        className: `${props.children.props.className} ${refClass}`.trim(),
      },
      props.children.props.children,
      TransitionLoading,
    );

  // 包裹children
  return (
    <div className={refClass}>
      {props.children}
      {TransitionLoading}
    </div>
  );
});

Loading.defaultProps = {
  className: '',
  background: 'var(--t-mask-bg-color)',
  color: 'var(--t-text-color)',
  mode: 'insert',
  zIndex: 100,
  text: 'loading...',
  icon: LoadingIcon,
};
