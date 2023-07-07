import React, { memo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { getClassNames } from '@tool-pack/basic';
import { getComponentClass, Z_INDEX } from '@pkg/shared';
import { Close as CloseIcon } from '@pkg/icons';
import { Icon } from '../icon';
import { Button } from '../button';
import { Footer, Header, Layout, Main } from '../layouts';
import {
  Transition,
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
} from '../transition';
import { DialogProps } from './dialog.types';
import { useEsc, useShow, useTransitionOrigin } from './dialog.hooks';
import { RequiredPart } from '@tool-pack/types';

const rootClass = getComponentClass('dialog');

export const Dialog: React.FC<DialogProps> = memo((props) => {
  const {
    className,
    visible,
    header,
    footer,
    children,
    onClose,
    closeOnClickMask,
    center,
    centered,
    zIndex,
    style,
    esc,
    ...rest
  } = props as RequiredPart<DialogProps, keyof typeof defaultProps>;

  const [show, close] = useShow(visible);
  const transformOrigin = useTransitionOrigin(props, show);
  useEsc(show, esc, close);

  const handleMaskClick = useCallback(() => {
    closeOnClickMask && close();
  }, [closeOnClickMask, close]);

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
      key="dialog-mask"
      className={`${rootClass}__mask`}
      style={{ zIndex }}
      onClick={handleMaskClick}></div>
  );
  const TransitionMask = (
    <Transition name={`${rootClass}__mask`} appear>
      {show && Mask}
    </Transition>
  );
  const Box = (
    <Layout
      key="dialog-box"
      {...rest}
      className={getClassNames(rootClass, {
        [className as string]: className,
        [`${rootClass}__center`]: center,
      })}
      style={{
        ...style,
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
  const TransitionBox = (
    <Transition name="t-dialog" on={onTransitionChange}>
      {show && (
        <div
          key="dialog-wrapper"
          style={{ zIndex }}
          className={getClassNames(`${rootClass}__wrapper`, {
            [`${rootClass}__centered`]: centered,
          })}>
          {Box}
        </div>
      )}
    </Transition>
  );
  return createPortal(
    <div className={`${rootClass}__root`}>
      {TransitionMask}
      {TransitionBox}
    </div>,
    document.body,
  );
});

const defaultProps = {
  zIndex: Z_INDEX,
  esc: false,
} satisfies Partial<DialogProps>;
Dialog.defaultProps = defaultProps;

Dialog.displayName = 'Dialog';
