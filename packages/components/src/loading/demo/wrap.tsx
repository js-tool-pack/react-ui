/**
 * title: 包裹模式
 * description: 包裹模式会生成一个div把子元素包起来，loading 内容会放到在该div下。
 */

import React, { useReducer } from 'react';
import { Button, Loading, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <Space vertical fill>
      <Button type="primary" onClick={setLoading}>
        {loading ? '隐藏' : '显示'}loading
      </Button>
      <Loading visible={loading} mode="wrap">
        <div
          style={{
            textAlign: 'center',
            height: '100px',
            background: 'deeppink',
            lineHeight: '100px',
            overflow: 'auto',
          }}>
          <div style={{ height: '200%' }}>我是内容</div>
        </div>
      </Loading>
    </Space>
  );
};

export default App;
