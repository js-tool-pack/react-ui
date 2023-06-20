/**
 * title: 添加className
 * description: 添加className。
 */

import React from 'react';
import { Button, Icon, Space, useMessage, Icons } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const Message = useMessage({
    className: 'custom-class-name',
    containerClassName: 'container-class-name',
    duration: 0,
    showClose: true,
  });
  return (
    <Space className="demo-message-class-name">
      <Button type="success" onClick={() => Message.success('hello world')}>
        show message
      </Button>
      <Button
        type="info"
        onClick={() =>
          Message.info('hello world', {
            className: 'custom-class-name2',
          })
        }>
        show message
      </Button>
      <Button type="primary" onClick={() => Message.clear()}>
        <Icon size="1.5em">
          <Icons.CircleClose />
        </Icon>
      </Button>
    </Space>
  );
};

export default App;
