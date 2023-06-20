/**
 * title: 单独使用
 * description: 单独使用 Message。
 */

import React, { useReducer } from 'react';
import { Button, Space, Message } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [visible, toggle] = useReducer((v) => !v, true);
  return (
    <Space className="demo-message">
      <Button type={'primary'} plain={'dashed'} size={'large'} onClick={toggle}>
        {visible ? '隐藏' : '显示'}
      </Button>
      {visible && (
        <Message
          type={'info'}
          showClose
          hoverKeep
          onLeave={() => {
            toggle();
          }}>
          hello world
        </Message>
      )}
    </Space>
  );
};

export default App;
