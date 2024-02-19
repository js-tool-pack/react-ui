import { ConfigContext } from '~/config-provider/config.context';
import { getComponentClass, useVisible } from '@pkg/shared';
import type { PopConfirmProps } from './pop-confirm.types';
import type { RequiredPart } from '@tool-pack/types';
import React, { useContext, useEffect } from 'react';
import { Layout, Footer, Main } from '~/layouts';
import { CircleInfoFill } from '@pkg/icons';
import { Popover } from '~/popover';
import { Button } from '~/button';
import enUS from './locale/en-US';
import { Space } from '~/space';
import { Icon } from '~/icon';

const rootName = getComponentClass('pop-confirm');

const defaultProps = {
  trigger: 'click',
} satisfies Partial<PopConfirmProps>;

export const PopConfirm: React.FC<PopConfirmProps> = (props) => {
  const {
    visible: outerVisible,
    confirmProps,
    cancelProps,
    onConfirm,
    children,
    onCancel,
    content,
    icon,
    ...rest
  } = props as RequiredPart<PopConfirmProps, keyof typeof defaultProps>;

  const _confirm = confirmProps ?? {};
  const _cancel = cancelProps ?? {};

  const locale = useContext(ConfigContext).locale.popConfirm || enUS;
  const [visible, hide, setVisible] = useVisible(outerVisible);

  useEffect(() => {
    visible !== undefined && setVisible(undefined);
  }, [visible]);

  const _onCancel: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    _cancel.attrs?.onClick?.(e);
    hide(onCancel);
  };
  const _onConfirm: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    _confirm.attrs?.onClick?.(e);
    hide(onConfirm);
  };

  const Content = (
    <Layout className={`${rootName}__layout`} vertical>
      <Main className={`${rootName}__main`} tag="section">
        <Space className={`${rootName}__space`} tag="div">
          {icon !== null &&
            (icon || (
              <Icon className={`${rootName}__icon`}>
                <CircleInfoFill />
              </Icon>
            ))}
          <div className={`${rootName}__content`}>{content}</div>
        </Space>
      </Main>
      <Footer className={`${rootName}__footer`} tag="section">
        <Space>
          {cancelProps !== null && (
            <Button
              {..._cancel}
              attrs={{
                ..._cancel.attrs,
                className: `${rootName}__cancel`,
                onClick: _onCancel,
              }}
              size={_cancel.size || 'small'}
              type={_cancel.type || 'info'}
              plain={_cancel.plain || true}
            >
              {_cancel.children ?? locale.cancelText}
            </Button>
          )}
          {confirmProps !== null && (
            <Button
              {..._confirm}
              attrs={{
                ..._confirm.attrs,
                className: `${rootName}__confirm`,
                onClick: _onConfirm,
              }}
              type={_confirm.type || 'primary'}
              size={_confirm.size || 'small'}
            >
              {_confirm.children ?? locale.confirmText}
            </Button>
          )}
        </Space>
      </Footer>
    </Layout>
  );

  return (
    <Popover {...rest} name="pop-confirm" visible={visible} content={Content}>
      {children}
    </Popover>
  );
};

PopConfirm.defaultProps = defaultProps;
PopConfirm.displayName = 'PopConfirm';
