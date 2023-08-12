import React, { useCallback, useEffect, useState } from 'react';
import type { PopConfirmProps } from './pop-confirm.types';
import { getComponentClass } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { isPromiseLike } from '@tool-pack/basic';
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
    cancelProps = {},
    confirmProps = {},
    onCancel,
    onConfirm,
    ...rest
  } = props as RequiredPart<PopConfirmProps, keyof typeof defaultProps>;

  const _confirm = confirmProps ?? {};
  const _cancel = cancelProps ?? {};

  const [visible, setVisible] = useState<boolean | undefined>();

  useEffect(() => {
    visible !== undefined && setVisible(undefined);
  }, [visible]);

  const handleCallback = (
    res: ReturnType<Required<PopConfirmProps>['onConfirm']>,
  ) => {
    const hide = () => setVisible(false);

    if (isPromiseLike(res)) {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      res.then(hide, () => {});
      return;
    }
    if (res === undefined || res) hide();
  };

  const _onCancel: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      _cancel.attrs?.onClick?.(e);
      handleCallback(onCancel?.());
    },
    [onCancel],
  );
  const _onConfirm: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      _confirm.attrs?.onClick?.(e);
      handleCallback(onConfirm?.());
    },
    [onConfirm],
  );

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
