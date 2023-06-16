/**
 * title: 包裹模式
 * description: 包裹模式会生成一个div把子元素包起来，loading 内容会放到在该div下。
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
      <Loading visible={loading} mode="wrap">
        <div
          style={{
            marginTop: '20px',
            height: '100px',
            background: 'lime',
            lineHeight: '100px',
          }}>
          我是内容
        </div>
      </Loading>
    </div>
  );
};

export default App;
