/**
 * title: 添加className
 * description: 添加className。
 */

import React from 'react';
import { Button, Icon, Space, useMessage, Icons } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const Message = useMessage({
    // 为窗体添加className
    attrs: { className: 'custom-class-name' },
    // 为容器添加classname
    containerAttrs: { className: 'container-class-name' },
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
            // 为窗体添加className
            attrs: { className: 'custom-class-name2' },
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
