/**
 * title: 延时
 * description: 当 trigger 为 hover 时，可以设置延时开启或延时关闭。
 */

import { Popover, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <Popover content="开启延时500ms" delay={500}>
        <Button>进入延时</Button>
      </Popover>
      <Popover leaveDelay={2000} content="关闭延时2s">
        <Button>离去延时</Button>
      </Popover>
    </Space>
  );
};

export default App;
