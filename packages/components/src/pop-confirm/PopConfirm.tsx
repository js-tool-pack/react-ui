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

export const PopConfirm: React.FC<PopConfirmProps> = (props) => {
  const {
    icon,
    onConfirm,
    confirmText,
    onCancel,
    cancelText,
    children,
    content,
    ...rest
  } = props as RequiredPart<PopConfirmProps, keyof typeof defaultProps>;

  const [visible, setVisible] = useState<boolean | undefined>();

  useEffect(() => {
    visible !== undefined && setVisible(undefined);
  }, [visible]);

  const handleCallback = (
    res: ReturnType<Required<PopConfirmProps>['onConfirm']>,
  ) => {
    const hide = () => setVisible(false);

    if (isPromiseLike(res)) {
      res.then(hide).catch();
      return;
    }
    if (res === undefined || res) hide();
  };

  const _onCancel = useCallback(() => {
    handleCallback(onCancel?.());
  }, [onCancel]);
  const _onConfirm = useCallback(() => {
    handleCallback(onConfirm?.());
  }, [onConfirm]);

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
          {cancelText !== null && (
            <Button
              type="info"
              plain
              className={`${rootName}__cancel`}
              size="small"
              onClick={_onCancel}>
              {cancelText}
            </Button>
          )}
          {confirmText !== null && (
            <Button
              type="primary"
              className={`${rootName}__confirm`}
              size="small"
              onClick={_onConfirm}>
              {confirmText}
            </Button>
          )}
        </Space>
      </Footer>
    </Layout>
  );

  return (
    <Popover {...rest} visible={visible} content={Content}>
      {children}
    </Popover>
  );
};

const defaultProps = {
  trigger: 'click',
  confirmText: '确认',
  cancelText: '取消',
} satisfies Partial<PopConfirmProps>;
PopConfirm.defaultProps = defaultProps;
PopConfirm.displayName = 'PopConfirm';
