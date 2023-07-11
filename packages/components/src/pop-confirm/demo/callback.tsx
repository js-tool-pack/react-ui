/**
 * title: 事件回调
 */

import React from 'react';
import { Button, PopConfirm, useMessage } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const message = useMessage();
  return (
    <PopConfirm
      content="确认要删除？"
      onCancel={() => message.info('点击取消')}
      onConfirm={() => {
        message.info('确认删除，稍等...');
        const p = new Promise<void>((resolve) => {
          setTimeout(resolve, 1500);
        });
        p.then(() => message.success('删除成功！'));
        return p;
      }}>
      <Button>删除</Button>
    </PopConfirm>
  );
};

export default App;
