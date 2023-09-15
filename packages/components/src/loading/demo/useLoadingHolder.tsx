/**
 * title: useLoadingHolder
 * description: 调用 useLoadingHolder 函数打开 loading；开启后也可以通过参数修改。
 */

import { useLoadingHolder, Button } from '@tool-pack/react-ui';
import React, { useEffect } from 'react';

const App: React.FC = () => {
  const [{ visible, toggle }, holder] = useLoadingHolder({
    attrs: {
      id: 'useLoadingHolder',
    },
    text: `全屏useLoadingHolder，点击任意处关闭....`,
    closeOnClick: false,
    visible: false,
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
      <Button onClick={toggle} type="primary">
        useLoadingHolder
      </Button>
    </div>
  );
};

export default App;
