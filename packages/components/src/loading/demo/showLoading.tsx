/**
 * title: showLoading
 * description: 调用 showLoading 函数打开 loading；该方法在外部只能做开启用，开启以后无法通过传参控制 loading。
 */

import { showLoading, Button } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Button
        onClick={() =>
          showLoading({ text: '全屏showLoading，点击任意处关闭....' })
        }
        type="primary"
      >
        showLoading
      </Button>
    </div>
  );
};

export default App;
