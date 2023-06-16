/**
 * title: useLoading
 * description: 调用 useLoading 函数打开 loading；该方法在外部只能做开启用，开启以后无法通过传参控制 loading。
 */

import React from 'react';
import { Button, useLoading } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const { toggle } = useLoading({
    visible: false,
    closeOnClick: true,
    text: `全屏useLoading，点击任意处关闭....`,
  });
  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={toggle}>
        useLoading
      </Button>
    </div>
  );
};

export default App;
