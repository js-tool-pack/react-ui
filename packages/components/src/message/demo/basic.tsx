/**
 * title: 基础用法
 * description: 从顶部出现，3 秒后自动消失。
 */

import React from 'react';
import { Button, Space, useMessage } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const Message = useMessage();
  return (
    <Space className="demo-message-basic">
      <Button type="primary" onClick={() => Message.open('hello world')}>
        show message
      </Button>
    </Space>
  );
};

export default App;
