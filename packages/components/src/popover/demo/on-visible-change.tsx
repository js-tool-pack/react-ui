/**
 * title: 显隐变更回调
 * description: 由外部传入的 visible 不会触发回调。
 */

import {
  useMessageHolder,
  Popover,
  Button,
  Switch,
  Space,
} from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  const [visible, setVisible] = useState(false);
  return (
    <>
      {holder}
      <Space gap={20}>
        <Popover
          onVisibleChange={(visible) => {
            message[visible ? 'success' : 'error']('visible:' + visible);
          }}
          content="内部事件启动的会触发 onVisibleChange"
        >
          <Button>hover me</Button>
        </Popover>

        <Popover
          onVisibleChange={(visible) => {
            message[visible ? 'success' : 'error']('visible:' + visible);
          }}
          content="由外部传入的 visible 并不会触发 onVisibleChange"
          placement="bottom"
          visible={visible}
        >
          <Switch onChange={setVisible} checked={visible} />
        </Popover>
      </Space>
    </>
  );
};

export default App;
