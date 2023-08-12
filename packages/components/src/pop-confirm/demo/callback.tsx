/**
 * title: 事件回调
 */

import React, { useState } from 'react';
import { Button, PopConfirm, Space, useMessage } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const message = useMessage();
  const [loading, setLoading] = useState(false);

  return (
    <Space>
      <PopConfirm
        content="确认要删除？"
        onCancel={() => message.info('点击取消')}
        confirmProps={{ loading }}
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
        }}>
        <Button>删除</Button>
      </PopConfirm>
      <PopConfirm
        content="确认要删除？"
        cancelProps={{ attrs: { onClick: () => message.info('click cancel') } }}
        onCancel={() => message.info('点击取消')}
        confirmProps={{
          attrs: { onClick: () => message.info('click confirm') },
        }}
        onConfirm={() => Promise.reject()}>
        <Button>删除</Button>
      </PopConfirm>
    </Space>
  );
};

export default App;
