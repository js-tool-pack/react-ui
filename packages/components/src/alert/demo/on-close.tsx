/**
 * title: 关闭回调
 */

import { useMessageHolder, Alert } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  return (
    <>
      {holder}
      <Alert
        onClose={(e) => {
          if (window.confirm('是否关闭提示?')) {
            message.success('已关闭');
          } else {
            e.preventDefault();
          }
        }}
        title="提示"
        closable
      >
        点击关闭按钮
      </Alert>
    </>
  );
};

export default App;
