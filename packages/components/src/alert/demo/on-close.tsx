/**
 * title: 关闭回调
 */

import React from 'react';
import { Alert, useMessageHolder } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  const onClose = () => {
    message.success('已关闭');
    console.log('已关闭');
  };
  return (
    <>
      {holder}
      <Alert title="提示" onClose={onClose} closable>
        点击关闭按钮
      </Alert>
    </>
  );
};

export default App;
