import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Footer, Header, Layout, Main } from '../layouts';
import { Button } from '../button';
import {
  Transition,
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
} from '../transition';
import { getClassNames } from '@tool-pack/basic';
import { getComponentClass, useClientSize } from '@pkg/shared';
import { CloseIcon } from './close.icon';

const rootClass = getComponentClass('dialog');

export const Dialog: React.FC<
  React.HTMLAttributes<HTMLElement> & {
    visible?: boolean;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    onClose?: () => void;
    closeOnClickMask?: boolean;
    center?: boolean;
    centered?: boolean;
  }
> = memo((props) => {
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
    style,
    ...rest
  } = props;
  const [show, setShow] = useState(visible || false);
  const [point, setPoint] = useState([0, 0] as [number, number]);
  const clientSize = useClientSize();

  const transformOrigin = useMemo(() => {
    const left = `calc(50% + ${-clientSize[0] / 2 + point[0]}px)`;
    const top = centered
      ? `calc(50% + ${-clientSize[1] / 2 + point[1]}px)`
      : style?.top !== undefined
      ? `calc(${point[1]}px - ${style.top})`
      : `calc(${point[1]}px - 50%)`;
    return `${left} ${top}`;
  }, [clientSize, point, centered, style]);

  useEffect(() => {
    setShow(visible || false);
  }, [visible]);

  useEffect(() => {
    if (show) return;
    const handler = (e: MouseEvent) => {
      setPoint([e.clientX, e.clientY]);
    };
    window.addEventListener('mouseup', handler);
    return () => {
      window.removeEventListener('mouseup', handler);
    };
  }, [show]);

  const handleClose = useCallback(() => {
    setShow(false);
  }, []);

  const handleMaskClick = useCallback(() => {
    closeOnClickMask && handleClose();
  }, [closeOnClickMask, handleClose]);

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
            onClick={handleClose}>
            {CloseIcon}
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

Dialog.displayName = 'Dialog';
