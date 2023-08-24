/**
 * title: 关闭回调
 */

import React from 'react';
import { Alert, useMessageHolder } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  return (
    <>
      {holder}
      <Alert
        title="提示"
        onClose={(e) => {
          if (window.confirm('是否关闭提示?')) {
            message.success('已关闭');
          } else {
            e.preventDefault();
          }
        }}
        closable>
        点击关闭按钮
      </Alert>
    </>
  );
};

export default App;
