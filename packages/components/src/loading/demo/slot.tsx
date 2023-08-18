/**
 * title: 更换icon和text
 * description: icon 和 text 都是可以更换的。
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
      <Loading
        visible={loading}
        icon={
          <button className="loading-rotate" disabled>
            icon
          </button>
        }
        text={<Button>text</Button>}>
        <div
          style={{
            marginTop: '20px',
            height: '100px',
            background: 'wheat',
            lineHeight: '100px',
          }}>
          我是内容
        </div>
      </Loading>
    </div>
  );
};

export default App;
