/**
 * title: 单独使用
 * description: 单独使用 Message。
 */

import { Message, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

const App: React.FC = () => {
  const [visible, toggle] = useReducer((v) => !v, true);
  return (
    <Space className="demo-message">
      <Button type={'primary'} plain={'dashed'} onClick={toggle} size={'large'}>
        {visible ? '隐藏' : '显示'}
      </Button>
      {visible && (
        <Message
          onLeave={() => {
            toggle();
          }}
          type={'info'}
          showClose
          hoverKeep
        >
          hello world
        </Message>
      )}
    </Space>
  );
};

export default App;
