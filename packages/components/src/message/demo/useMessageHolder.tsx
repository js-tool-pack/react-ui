/**
 * title: useMessageHolder
 * description: useMessageHolder与useMessage用法一样，区别是useMessageHolder要挂载holder。
 */

import { useMessageHolder, Button, Space } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const [Message, holder] = useMessageHolder();
  return (
    <>
      {holder}
      <Space className="demo-message">
        <Button onClick={() => Message.open('hello world')} type="primary">
          show message
        </Button>
      </Space>
    </>
  );
};

export default App;
