/**
 * title: 添加className
 * description: 添加className。
 */

import { useMessage, Button, Space, Icons, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage({
    // 为容器添加classname
    containerAttrs: { className: 'container-class-name' },
    // 为窗体添加className
    attrs: { className: 'custom-class-name' },
    showClose: true,
    duration: 0,
  });
  return (
    <Space className="demo-message-class-name">
      <Button onClick={() => Message.success('hello world')} type="success">
        show message
      </Button>
      <Button
        onClick={() =>
          Message.info('hello world', {
            // 为窗体添加className
            attrs: { className: 'custom-class-name2' },
          })
        }
        type="info"
      >
        show message
      </Button>
      <Button onClick={() => Message.clear()} type="primary">
        <Icon size="1.5em">
          <Icons.CircleClose />
        </Icon>
      </Button>
    </Space>
  );
};

export default App;
