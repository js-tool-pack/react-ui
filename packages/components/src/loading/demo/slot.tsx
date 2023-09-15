/**
 * title: 更换icon和text
 * description: icon 和 text 都是可以更换的。
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
      <Loading
        icon={
          <button className="loading-rotate" disabled>
            icon
          </button>
        }
        text={<Button>text</Button>}
        visible={loading}
      >
        <div
          style={{
            background: 'wheat',
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
