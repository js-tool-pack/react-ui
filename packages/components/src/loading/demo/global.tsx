/**
 * title: 全屏模式
 * description: 当 loading 没有 children 时，loading 内容会转到 body 下，变为全屏的 loading。
 */

import { Loading, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setLoading} type="primary">
        {loading ? '隐藏' : '显示'}全屏的loading
      </Button>
      <Loading onClose={setLoading} visible={loading} closeOnClick />
    </div>
  );
};

export default App;
