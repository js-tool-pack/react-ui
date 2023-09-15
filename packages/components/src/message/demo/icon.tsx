/**
 * title: 更换图标
 * description: 更换图标。
 */

import { useMessage, Button, Space, Icons } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage();
  return (
    <Space className="demo-message-icon">
      <Button onClick={() => Message.error('hello world')} type="danger">
        show message
      </Button>
      <Button
        onClick={() =>
          Message.error('hello world', {
            icon: <Icons.CircleClose />,
          })
        }
        type="danger"
      >
        show message
      </Button>
    </Space>
  );
};

export default App;
