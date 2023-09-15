/**
 * title: icon
 * description: 自定义 icon 或去除 icon。
 */

import { PopConfirm, Button, Icons, Space, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <PopConfirm
        icon={
          <Icon color="red">
            <Icons.CircleWarningFill />
          </Icon>
        }
        content="确认要删除？"
      >
        <Button>自定义图标</Button>
      </PopConfirm>

      <PopConfirm content="确认要删除？" icon={null}>
        <Button>无图标</Button>
      </PopConfirm>
    </Space>
  );
};

export default App;
