/**
 * title: 不同状态
 * description: 用来显示「成功、消息、警告、错误」类的操作反馈。
 */

import { useMessage, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage();
  return (
    <Space className="demo-message">
      <Button
        onClick={() => Message.open('hello', { type: 'success' })}
        type="success"
      >
        success
      </Button>
      <Button
        onClick={() => Message.open('info', { type: 'info' })}
        type="info"
      >
        info
      </Button>
      <Button onClick={() => Message.warning('warning')} type="warning">
        warning
      </Button>
      <Button onClick={() => Message.error('error')} type="danger">
        error
      </Button>
    </Space>
  );
};

export default App;
