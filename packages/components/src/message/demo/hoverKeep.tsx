/**
 * title: hover时停止倒计时
 * description: 有时候想看信息内容，但是 Message 给的时间太短了，
 *   根本看不完内容，开太长又不太合适，并不是每个人都会细看，这时可以开启 hoverKeep。
 *   开启以后，鼠标划过 Message 时停止倒计时， 鼠标离开后继续倒计时。
 */

import { useMessage, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const Message = useMessage({ hoverKeep: true });
  return (
    <Space className="demo-message">
      <Button onClick={() => Message.success('hello')} type="success">
        success
      </Button>
      <Button onClick={() => Message.info('info')} type="success">
        info
      </Button>
      <Button onClick={() => Message.warning('warning')} type="success">
        warning
      </Button>
      <Button
        onClick={() => Message.error('error', { hoverKeep: false })}
        type="danger"
      >
        hoverKeep: false
      </Button>
    </Space>
  );
};

export default App;
