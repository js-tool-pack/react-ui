/**
 * title: 基础用法
 * description: loading的基础用法。
 */

import { Loading, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setLoading} type="primary">
        {loading ? '隐藏' : '显示'}loading
      </Button>
      <Loading visible={loading}>
        <div
          style={{
            background: 'deeppink',
            lineHeight: '100px',
            marginTop: '20px',
            height: '100px',
          }}
        >
          我是内容
        </div>
      </Loading>
    </div>
  );
};

export default App;
