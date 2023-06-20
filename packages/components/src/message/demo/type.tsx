/**
 * title: 不同状态
 * description: 用来显示「成功、消息、警告、错误」类的操作反馈。
 */

import React from 'react';
import { Button, Space, useMessage } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const Message = useMessage();
  return (
    <Space className="demo-message">
      <Button
        type="success"
        onClick={() => Message.open('hello', { type: 'success' })}>
        success
      </Button>
      <Button
        type="info"
        onClick={() => Message.open('info', { type: 'info' })}>
        info
      </Button>
      <Button type="warning" onClick={() => Message.warning('warning')}>
        warning
      </Button>
      <Button type="danger" onClick={() => Message.error('error')}>
        error
      </Button>
    </Space>
  );
};

export default App;
