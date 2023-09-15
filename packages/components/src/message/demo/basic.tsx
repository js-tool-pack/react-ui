/**
 * title: 基础用法
 * description: 从顶部出现，3 秒后自动消失。
 */

import { useMessage, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage();
  return (
    <Space className="demo-message-basic">
      <Button onClick={() => Message.open('hello world')} type="primary">
        show message
      </Button>
    </Space>
  );
};

export default App;
