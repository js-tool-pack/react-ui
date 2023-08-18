import React, { useCallback } from 'react';
import { createPortal } from 'react-dom';
import { getClassNames } from '@tool-pack/basic';
import {
  getComponentClass,
  useScrollLock,
  useVisible,
  Z_INDEX,
} from '@pkg/shared';
import { Close as CloseIcon } from '@pkg/icons';
import { Icon } from '~/icon';
import { Button } from '~/button';
import { Footer, Header, Layout, Main } from '~/layouts';
import { Transition } from '~/transition';
import { DialogProps } from './dialog.types';
import { useEsc, useTransitionOrigin } from './dialog.hooks';
import { RequiredPart } from '@tool-pack/types';

const rootClass = getComponentClass('dialog');
const defaultProps = {
  zIndex: Z_INDEX,
  esc: false,
} satisfies Partial<DialogProps>;

export const Dialog: React.FC<DialogProps> = React.memo((props) => {
  const {
    visible: outerVisible,
    header,
    footer,
    children,
    onClose,
    closeOnClickMask,
    center,
    centered,
    zIndex,
    esc,
    attrs = {},
    bodyAttrs = {},
  } = props as RequiredPart<DialogProps, keyof typeof defaultProps>;

  const [visible, close] = useVisible(outerVisible);
  useScrollLock(visible, document.body);
  const transformOrigin = useTransitionOrigin(props, visible);

  const handleClose = useCallback(() => {
    close();
    onClose?.();
  }, [onClose]);

  useEsc(visible, esc, handleClose);

  const handleMaskClick = useCallback(() => {
    closeOnClickMask && handleClose();
  }, [closeOnClickMask, handleClose]);

  const Mask = (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={`${rootClass}__mask`} onClick={handleMaskClick}></div>
  );
  const Box = (
    <div
      className={getClassNames(`${rootClass}__wrapper`, {
        [`${rootClass}__centered`]: centered,
      })}>
      <Layout
        key="dialog-box"
        {...bodyAttrs}
        className={getClassNames(rootClass, bodyAttrs.className, {
          [`${rootClass}__center`]: center,
        })}
        style={{
          ...bodyAttrs.style,
          transformOrigin,
        }}
        vertical>
        {header !== null && (
          <Header className={`${rootClass}__header`}>
            <span className={`${rootClass}__title`}>{header}</span>
            <Button
              className={`${rootClass}__btn-close`}
              plain="text"
              size="small"
              onClick={handleClose}>
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
    </div>
  );

  return createPortal(
    <Transition name="t-dialog">
      {visible && (
        <div
          {...attrs}
          key={rootClass}
          className={getClassNames(`${rootClass}__root`, attrs.className)}
          style={{ ...attrs.style, zIndex }}>
          {Mask}
          {Box}
        </div>
      )}
    </Transition>,
    document.body,
  );
});

Dialog.defaultProps = defaultProps;

Dialog.displayName = 'Dialog';
