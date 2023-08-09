/**
 * title: 更换图标
 * description: 更换图标。
 */

import React from 'react';
import { Button, Space, useMessage, Icons } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const Message = useMessage();
  return (
    <Space className="demo-message-icon">
      <Button type="danger" onClick={() => Message.error('hello world')}>
        show message
      </Button>
      <Button
        type="danger"
        onClick={() =>
          Message.error('hello world', {
            icon: <Icons.CircleClose />,
          })
        }>
        show message
      </Button>
    </Space>
  );
};

export default App;
