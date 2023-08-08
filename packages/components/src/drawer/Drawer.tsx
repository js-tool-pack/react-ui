import React, { useCallback, useMemo } from 'react';
import type { DrawerProps } from './drawer.types';
import { getComponentClass, numToPx, Z_INDEX } from '@pkg/shared';
import { getClassNames, isString } from '@tool-pack/basic';
import { createPortal } from 'react-dom';
import { Footer, Header, Layout, Main } from '../layouts';
import {
  Button,
  Icon,
  Resizer,
  Transition,
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
} from '@pkg/components';
import { Close as CloseIcon } from '@pkg/icons';
import { RequiredPart } from '@tool-pack/types';

const rootClass = getComponentClass('drawer');
type PL = Required<DrawerProps>['placement'];
const resizePlaceMap: Record<PL, PL> = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
};

export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    header,
    footer,
    children,
    visible,
    onClose,
    onLeave,
    title,
    zIndex,
    closeOnClickMask,
    showClose,
    closeIcon,
    destroyOnClose,
    placement,
    size,
    appendTo,
    resizeable,
    attrs = {},
    bodyAttrs = {},
  } = props as RequiredPart<DrawerProps, keyof typeof defaultProps>;

  const close = () => {
    onClose?.();
  };

  const handleMaskClick = () => {
    closeOnClickMask && close();
  };

  const isEl = (node: React.ReactNode) =>
    React.isValidElement(node) || isString(node);

  const Head = () => {
    const className = `${rootClass}__header`;

    if (isEl(header)) return <Header className={className}>{header}</Header>;

    const CloseBtn = (
      <Button
        type="info"
        plain="text"
        size="small"
        className={`${rootClass}__close`}
        onClick={close}>
        {isEl(closeIcon) ? (
          closeIcon
        ) : (
          <Icon>
            <CloseIcon />
          </Icon>
        )}
      </Button>
    );

    return (
      <Header className={className}>
        <span className={`${rootClass}__title`}>{title}</span>
        {showClose && CloseBtn}
      </Header>
    );
  };

  const bodyStyle = useMemo(() => {
    const res: React.CSSProperties = { ...bodyAttrs.style };
    const value = numToPx(size, defaultProps.size);

    if (['left', 'right'].includes(placement)) res.width = value;
    else res.height = value;

    return res;
  }, [bodyAttrs, size, placement]);

  const Body = (
    <Layout
      {...bodyAttrs}
      style={bodyStyle}
      className={getClassNames(rootClass, bodyAttrs.className)}
      vertical>
      {resizeable && (
        <Resizer
          placement={resizePlaceMap[placement]}
          style={{ zIndex: 1 }}
          min={10}
        />
      )}
      {header !== null && <Head />}
      <Main className={`${rootClass}__main`}>{children}</Main>
      {footer && <Footer className={`${rootClass}__footer`}>{footer}</Footer>}
    </Layout>
  );

  const Mask = (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={`${rootClass}__mask`} onClick={handleMaskClick}></div>
  );

  const Root = (
    <div
      {...attrs}
      key={rootClass}
      className={getClassNames(
        `${rootClass}__root`,
        attrs.className,
        `${rootClass}--${placement}`,
        {
          [`${rootClass}--fixed`]: appendTo === document.body,
        },
      )}
      style={{ ...attrs.style, zIndex }}>
      {Mask}
      {Body}
    </div>
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
        onLeave?.();
      }
    },
    [onLeave],
  );

  const Trans = (
    <Transition
      show={destroyOnClose === true ? undefined : visible}
      name={rootClass}
      on={onTransitionChange}
      appear={destroyOnClose === 'mixed' ? null : false}>
      {destroyOnClose === true ? visible && Root : Root}
    </Transition>
  );

  if (appendTo === null) return Trans;

  return createPortal(Trans, appendTo || document.body);
};

const defaultProps = {
  zIndex: Z_INDEX,
  placement: 'right',
  closeOnClickMask: true,
  destroyOnClose: 'mixed',
  showClose: true,
  size: '35%',
  appendTo: globalThis.document?.body,
} satisfies Partial<DrawerProps>;

Drawer.defaultProps = defaultProps;
Drawer.displayName = 'Drawer';
