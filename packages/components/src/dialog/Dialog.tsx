import {
  getComponentClass,
  useScrollLock,
  useVisible,
  Z_INDEX,
} from '@pkg/shared';
import { useTransitionOrigin, useEsc } from './dialog.hooks';
import { Footer, Header, Layout, Main } from '~/layouts';
import { getClassNames } from '@tool-pack/basic';
import { Close as CloseIcon } from '@pkg/icons';
import { RequiredPart } from '@tool-pack/types';
import { DialogProps } from './dialog.types';
import React, { useCallback } from 'react';
import { Transition } from '~/transition';
import { createPortal } from 'react-dom';
import { Button } from '~/button';
import { Icon } from '~/icon';

const rootClass = getComponentClass('dialog');
const defaultProps = {
  zIndex: Z_INDEX,
  esc: false,
} satisfies Partial<DialogProps>;

export const Dialog: React.FC<DialogProps> = React.memo((props) => {
  const {
    visible: outerVisible,
    closeOnClickMask,
    bodyAttrs = {},
    attrs = {},
    children,
    centered,
    onClose,
    header,
    footer,
    center,
    zIndex,
    esc,
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
      })}
    >
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
        vertical
      >
        {header !== null && (
          <Header className={`${rootClass}__header`}>
            <span className={`${rootClass}__title`}>{header}</span>
            <Button
              className={`${rootClass}__btn-close`}
              onClick={handleClose}
              plain="text"
              size="small"
            >
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
          className={getClassNames(`${rootClass}__root`, attrs.className)}
          style={{ ...attrs.style, zIndex }}
          key={rootClass}
        >
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
