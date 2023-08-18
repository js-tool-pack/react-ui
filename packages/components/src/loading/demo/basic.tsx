/**
 * title: 基础用法
 * description: loading的基础用法。
 */

import React, { useReducer } from 'react';
import { Button, Loading } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={setLoading}>
        {loading ? '隐藏' : '显示'}loading
      </Button>
      <Loading visible={loading}>
        <div
          style={{
            marginTop: '20px',
            height: '100px',
            background: 'deeppink',
            lineHeight: '100px',
          }}>
          我是内容
        </div>
      </Loading>
    </div>
  );
};

export default App;
