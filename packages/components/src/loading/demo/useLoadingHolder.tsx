/**
 * title: useLoadingHolder
 * description: 调用 useLoadingHolder 函数打开 loading；开启后也可以通过参数修改。
 */

import React, { useEffect } from 'react';
import { Button, useLoadingHolder } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [{ visible, toggle }, holder] = useLoadingHolder({
    visible: false,
    closeOnClick: false,
    text: `全屏useLoadingHolder，点击任意处关闭....`,
    attrs: {
      id: 'useLoadingHolder',
    },
  });

  useEffect(() => {
    if (!visible) return;
    const handler = () => toggle();
    window.addEventListener('click', handler, true);
    return () => window.removeEventListener('click', handler, true);
  }, [visible]);

  return (
    <div style={{ textAlign: 'center' }}>
      {holder}
      <Button type="primary" onClick={toggle}>
        useLoadingHolder
      </Button>
    </div>
  );
};

export default App;
