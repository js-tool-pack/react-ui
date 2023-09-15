/**
 * title: 可关闭的消息提示
 * description: 默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 showClose 设置为 true。<br />
 *  Message 拥有可控的 duration， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。<br />
 *  可以使用 clear 清理同一个 useMessage 生成的所有 Message。
 */

import { useMessage, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage({ showClose: true, duration: 0 });
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
      <Button
        onClick={() =>
          Message.error('error', { showClose: false, duration: 2500 })
        }
        type="danger"
      >
        showClose: false
      </Button>
      <Button onClick={() => Message.clear()} type="primary">
        clear
      </Button>
    </Space>
  );
};

export default App;
