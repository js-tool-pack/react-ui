/**
 * title: 事件回调
 */

import { PopConfirm, useMessage, Button, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const message = useMessage();
  const [loading, setLoading] = useState(false);

  return (
    <Space>
      <PopConfirm
        onConfirm={() => {
          setLoading(true);
          message.info('确认删除，稍等...');
          const p = new Promise<void>((resolve) => {
            setTimeout(resolve, 3000);
          });
          p.then(() => {
            setLoading(false);
            message.success('删除成功！');
          });
          return p;
        }}
        onCancel={() => message.info('点击取消')}
        confirmProps={{ loading }}
        content="确认要删除？"
      >
        <Button>删除</Button>
      </PopConfirm>
      <PopConfirm
        confirmProps={{
          attrs: { onClick: () => message.info('click confirm') },
        }}
        cancelProps={{ attrs: { onClick: () => message.info('click cancel') } }}
        onCancel={() => message.info('点击取消')}
        onConfirm={() => Promise.reject()}
        content="确认要删除？"
      >
        <Button>删除</Button>
      </PopConfirm>
    </Space>
  );
};

export default App;
