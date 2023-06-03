import { LoadingIcon } from './loading.icon';
import { LoadingOptions } from './loading.types';
import React, { memo, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  Transition,
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
} from '../transition';
import styles from './Loading.module.scss';
import { getComponentClass } from '@pkg/shared';

const rootClass = getComponentClass('loading');
const refClass = `${rootClass}_ref`;

/**
 * loading组件
 */
export const Loading: React.FC<LoadingOptions> = memo((props) => {
  const closeLoading = () => {
    if (!props.closeOnClick) return;
    props.onClose?.();
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
        {props.visible && LoadingBody}
      </Transition>
    ),
    [props.visible, props.onLeave],
  );

  // 没有children传到body下
  if (!props.children) return createPortal(TransitionLoading, document.body);

  // 插入children
  if (props.mode === 'insert')
    return React.cloneElement(
      props.children,
      {
        ...props.children.props,
        className:
          `${props.children.props.className} ${refClass} ${styles['ref']}`.trim(),
      },
      props.children.props.children,
      TransitionLoading,
    );

  // 包裹children
  return (
    <div className={refClass + ' ' + styles['ref']}>
      {props.children}
      {TransitionLoading}
    </div>
  );
});

Loading.defaultProps = {
  className: '',
  background: 'rgba(0, 0, 0, 0.38)',
  mode: 'insert',
  zIndex: 100,
  text: 'loading...',
  icon: LoadingIcon,
};
