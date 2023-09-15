/**
 * title: useLoading
 * description: 调用 useLoading 函数打开 loading；该方法在外部只能做开启用，开启以后无法通过传参控制 loading。
 */

import { useLoading, Button } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  const { toggle } = useLoading({
    text: `全屏useLoading，点击任意处关闭....`,
    closeOnClick: true,
    visible: false,
  });
  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={toggle} type="primary">
        useLoading
      </Button>
    </div>
  );
};

export default App;
