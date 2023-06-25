import React, { memo, useCallback } from 'react';
import type { DrawerProps } from './drawer.types';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { createPortal } from 'react-dom';
import { Footer, Header, Layout, Main } from '../layouts';
import {
  Button,
  Icon,
  Transition,
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
} from '@pkg/components';
import { Close as CloseIcon } from '@pkg/icons';

const rootClass = getComponentClass('drawer');

const _Drawer: React.FC<DrawerProps> = (props) => {
  const {
    className,
    header,
    footer,
    children,
    visible,
    onClose,
    zIndex,
    center,
    closeOnClickMask,
    style,
    ...rest
  } = props;

  const close = () => {
    onClose?.();
  };

  const handleMaskClick = useCallback(() => {
    closeOnClickMask && close();
  }, [closeOnClickMask, close]);

  const Body = (
    <Layout
      key="drawer-box"
      {...rest}
      style={{
        ...style,
        zIndex,
      }}
      className={getClassNames(rootClass, {
        [className as string]: className,
        [`${rootClass}__center`]: center,
      })}
      vertical>
      {header !== null && (
        <Header className={`${rootClass}__header`}>
          <span className={`${rootClass}__title`}>{header}</span>
          <Button
            className={`${rootClass}__btn-close`}
            plain="text"
            size="small"
            onClick={close}>
            <Icon>
              <CloseIcon />
            </Icon>
          </Button>
        </Header>
      )}
      <Main className={`${rootClass}__main`}>{children}</Main>
      {footer !== null && (
        <Footer className={`${rootClass}__footer`}>{footer}</Footer>
      )}
    </Layout>
  );

  const onTransitionChange = useCallback(
    (
      _: HTMLElement,
      status: TRANSITION_STATUS,
      lifeCircle: TRANSITION_LIFE_CIRCLE,
    ) => {
      if (
        status === TRANSITION_STATUS.hide &&
        lifeCircle === TRANSITION_LIFE_CIRCLE.after
      ) {
        onClose?.();
      }
    },
    [onClose],
  );

  const Mask = (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      key="drawer-mask"
      className={`${rootClass}__mask`}
      style={{ zIndex }}
      onClick={handleMaskClick}></div>
  );
  const TransitionMask = (
    <Transition name={`${rootClass}__mask`} appear>
      {visible && Mask}
    </Transition>
  );

  const TransitionBox = (
    <Transition name={rootClass} on={onTransitionChange}>
      {visible && Body}
    </Transition>
  );
  return createPortal(
    <div className={`${rootClass}__root`}>
      {TransitionMask}
      {TransitionBox}
    </div>,
    document.body,
  );
};

_Drawer.defaultProps = {
  zIndex: 100,
  placement: 'right',
};

export const Drawer = memo(_Drawer);
