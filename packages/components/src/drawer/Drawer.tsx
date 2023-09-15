import {
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
  Transition,
  Resizer,
  Button,
  Icon,
} from '@pkg/components';
import {
  getComponentClass,
  useScrollLock,
  useAppendTo,
  useVisible,
  numToPx,
  Z_INDEX,
} from '@pkg/shared';
import React, { useCallback, useMemo, useRef } from 'react';
import { getClassNames, isString } from '@tool-pack/basic';
import { Footer, Header, Layout, Main } from '~/layouts';
import type { DrawerProps } from './drawer.types';
import { Close as CloseIcon } from '@pkg/icons';
import { RequiredPart } from '@tool-pack/types';
import { useEsc } from '~/dialog/dialog.hooks';
import { createPortal } from 'react-dom';

const rootClass = getComponentClass('drawer');
type PL = Required<DrawerProps>['placement'];
const resizePlaceMap: Record<PL, PL> = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top',
};

const defaultProps = {
  appendTo: () => globalThis.document?.body,
  destroyOnClose: 'mixed',
  closeOnClickMask: true,
  placement: 'right',
  zIndex: Z_INDEX,
  showClose: true,
  size: '35%',
  esc: false,
} satisfies Partial<DrawerProps>;

export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    visible: outerVisible,
    closeOnClickMask,
    destroyOnClose,
    bodyAttrs = {},
    resizeable,
    attrs = {},
    showClose,
    closeIcon,
    placement,
    children,
    appendTo,
    onClose,
    onLeave,
    header,
    footer,
    zIndex,
    title,
    size,
    esc,
  } = props as RequiredPart<DrawerProps, keyof typeof defaultProps>;

  const [appendToTarget] = useAppendTo(appendTo, defaultProps.appendTo);
  const [visible, close] = useVisible(outerVisible, onClose);
  const bodyRef = useRef<HTMLDivElement>(null);

  useScrollLock(
    visible,
    useCallback(
      () =>
        appendToTarget ||
        bodyRef.current?.parentElement?.parentElement ||
        undefined,
      [appendToTarget],
    ),
  );
  useEsc(visible, esc, close);

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
        className={`${rootClass}__close`}
        onClick={() => close()}
        plain="text"
        size="small"
        type="info"
      >
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

    if (['right', 'left'].includes(placement)) res.width = value;
    else res.height = value;

    return res;
  }, [bodyAttrs, size, placement]);

  const Body = (
    <Layout
      {...bodyAttrs}
      className={getClassNames(rootClass, bodyAttrs.className)}
      style={bodyStyle}
      ref={bodyRef}
      vertical
    >
      {resizeable && (
        <Resizer
          placement={resizePlaceMap[placement]}
          attrs={{ style: { zIndex: 1 } }}
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
      className={getClassNames(
        `${rootClass}__root`,
        attrs.className,
        `${rootClass}--${placement}`,
        {
          [`${rootClass}--fixed`]: appendToTarget === document.body,
        },
      )}
      style={{ ...attrs.style, zIndex }}
      key={rootClass}
    >
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
      appear={destroyOnClose === 'mixed' ? null : false}
      on={onTransitionChange}
      name={rootClass}
    >
      {destroyOnClose === true ? visible && Root : Root}
    </Transition>
  );

  if (appendToTarget === null) return Trans;

  return createPortal(Trans, appendToTarget);
};

Drawer.defaultProps = defaultProps;
Drawer.displayName = 'Drawer';
