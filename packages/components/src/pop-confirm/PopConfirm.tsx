import React, { useEffect } from 'react';
import type { PopConfirmProps } from './pop-confirm.types';
import { getComponentClass, useVisible } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { Popover } from '~/popover';
import { Layout, Footer, Main } from '~/layouts';
import { Button } from '~/button';
import { Space } from '~/space';
import { Icon } from '~/icon';
import { CircleInfoFill } from '@pkg/icons';

const rootName = getComponentClass('pop-confirm');

const defaultProps = {
  trigger: 'click',
} satisfies Partial<PopConfirmProps>;

export const PopConfirm: React.FC<PopConfirmProps> = (props) => {
  const {
    icon,
    children,
    content,
    cancelProps,
    confirmProps,
    onCancel,
    visible: outerVisible,
    onConfirm,
    ...rest
  } = props as RequiredPart<PopConfirmProps, keyof typeof defaultProps>;

  const _confirm = confirmProps ?? {};
  const _cancel = cancelProps ?? {};

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
      <Main tag="section" className={`${rootName}__main`}>
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
      <Footer tag="section" className={`${rootName}__footer`}>
        <Space>
          {cancelProps !== null && (
            <Button
              {..._cancel}
              type={_cancel.type || 'info'}
              size={_cancel.size || 'small'}
              plain={_cancel.plain || true}
              attrs={{
                ..._cancel.attrs,
                className: `${rootName}__cancel`,
                onClick: _onCancel,
              }}>
              {_cancel.children ?? '取消'}
            </Button>
          )}
          {confirmProps !== null && (
            <Button
              {..._confirm}
              type={_confirm.type || 'primary'}
              size={_confirm.size || 'small'}
              attrs={{
                ..._confirm.attrs,
                className: `${rootName}__confirm`,
                onClick: _onConfirm,
              }}>
              {_confirm.children ?? '确认'}
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
