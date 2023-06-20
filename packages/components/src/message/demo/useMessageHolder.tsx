/**
 * title: useMessageHolder
 * description: useMessageHolder与useMessage用法一样，区别是useMessageHolder要挂载holder。
 */

import React from 'react';
import { Button, Space, useMessageHolder } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [Message, holder] = useMessageHolder();
  return (
    <>
      {holder}
      <Space className="demo-message">
        <Button type="primary" onClick={() => Message.open('hello world')}>
          show message
        </Button>
      </Space>
    </>
  );
};

export default App;
