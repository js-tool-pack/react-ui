/**
 * title: 插入模式
 * description: 插入模式会loading内容插入到唯一子元素下；如果传入的children有多个元素，会变为包裹模式。
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
      <Loading visible={loading} mode="insert">
        <div
          style={{
            marginTop: '20px',
            height: '100px',
            background: 'lime',
            lineHeight: '100px',
          }}>
          使用插入模式
        </div>
      </Loading>
      <Loading visible={loading} mode="insert">
        <div
          style={{
            marginTop: '20px',
            height: '100px',
            background: 'pink',
            lineHeight: '100px',
          }}>
          使用插入模式
        </div>
        <div
          style={{
            marginTop: '20px',
            height: '100px',
            background: 'pink',
            lineHeight: '100px',
          }}>
          但因为是多个元素，所以变为了包裹元素
        </div>
      </Loading>
    </div>
  );
};

export default App;
