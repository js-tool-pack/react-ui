/**
 * title: icon
 * description: 自定义 icon 或去除 icon。
 */

import React from 'react';
import { Button, Icon, Icons, PopConfirm, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Space>
      <PopConfirm
        icon={
          <Icon color="red">
            <Icons.CircleWarningFill />
          </Icon>
        }
        content="确认要删除？">
        <Button>自定义图标</Button>
      </PopConfirm>

      <PopConfirm icon={null} content="确认要删除？">
        <Button>无图标</Button>
      </PopConfirm>
    </Space>
  );
};

export default App;
