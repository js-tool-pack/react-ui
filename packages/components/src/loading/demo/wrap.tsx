/**
 * title: 包裹模式
 * description: 包裹模式会生成一个div把子元素包起来，loading 内容会放到在该div下。
 */

import { Loading, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <Space vertical fill>
      <Button onClick={setLoading} type="primary">
        {loading ? '隐藏' : '显示'}loading
      </Button>
      <Loading visible={loading} mode="wrap">
        <div
          style={{
            background: 'deeppink',
            textAlign: 'center',
            lineHeight: '100px',
            overflow: 'auto',
            height: '100px',
          }}
        >
          <div style={{ height: '200%' }}>我是内容</div>
        </div>
      </Loading>
    </Space>
  );
};

export default App;
