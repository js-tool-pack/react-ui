import React, { useMemo } from 'react';
import type { PopConfirmProps } from './pop-confirm.types';
import { getComponentClass } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { Tooltip } from '../tooltip';
import { Layout, Footer, Main, Header } from '../layouts';
import { Button } from '../button';
import { Space } from '../space';

const rootName = getComponentClass('pop-confirm');

export const PopConfirm: React.FC<PopConfirmProps> = (props) => {
  const { header, onConfirm, onCancel, children, content, className, ...rest } =
    props as RequiredPart<PopConfirmProps, keyof typeof defaultProps>;

  const Content = useMemo(
    () => (
      <Layout vertical>
        {header !== null && <Header>{header}</Header>}
        <Main>{content}</Main>
        <Footer>
          <Space>
            <Button type="info" size="small" onClick={onCancel}>
              取消
            </Button>
            <Button type="primary" size="small" onClick={onConfirm}>
              确认
            </Button>
          </Space>
        </Footer>
      </Layout>
    ),
    [content, onConfirm, onCancel],
  );

  return (
    <Tooltip
      {...rest}
      className={getClassNames(rootName, className)}
      title={Content}>
      {children}
    </Tooltip>
  );
};

const defaultProps = {
  trigger: 'click',
} satisfies Partial<PopConfirmProps>;
PopConfirm.defaultProps = defaultProps;
PopConfirm.displayName = 'PopConfirm';
