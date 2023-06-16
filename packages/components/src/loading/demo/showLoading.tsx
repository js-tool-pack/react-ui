/**
 * title: showLoading
 * description: 调用 showLoading 函数打开 loading；该方法在外部只能做开启用，开启以后无法通过传参控制 loading。
 */

import React from 'react';
import { Button, showLoading } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Button
        type="primary"
        onClick={() =>
          showLoading({ text: '全屏showLoading，点击任意处关闭....' })
        }>
        showLoading
      </Button>
    </div>
  );
};

export default App;
