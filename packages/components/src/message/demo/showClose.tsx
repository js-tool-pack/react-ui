/**
 * title: 可关闭的消息提示
 * description: 默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 showClose 设置为 true。<br />
 *  Message 拥有可控的 duration， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。<br />
 *  可以使用 clear 清理同一个 useMessage 生成的所有 Message。
 */

import React from 'react';
import { Button, Space, useMessage } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const Message = useMessage({ showClose: true, duration: 0 });
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
      <Button
        type="danger"
        onClick={() =>
          Message.error('error', { showClose: false, duration: 2500 })
        }>
        showClose: false
      </Button>
      <Button type="primary" onClick={() => Message.clear()}>
        clear
      </Button>
    </Space>
  );
};

export default App;
