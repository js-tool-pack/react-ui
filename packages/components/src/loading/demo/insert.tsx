/**
 * title: 插入模式
 * description: 插入模式会loading内容插入到唯一子元素下；如果传入的children有多个元素，会变为包裹模式。<br />
 *   **注意：有滚动条的元素不适合使用插入模式(由于滚动条元素的 overflow 属性会导致绝对定位跟随滚动，使得遮罩覆盖不了父元素)，建议使用包裹模式。**
 */

import React, { useReducer } from 'react';
import { Button, Loading, Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <Space gap={20} vertical fill style={{ textAlign: 'center' }}>
      <Button type="primary" onClick={setLoading}>
        {loading ? '隐藏' : '显示'}loading
      </Button>
      <Loading visible={loading} mode="insert">
        <div
          style={{
            height: '100px',
            background: 'deeppink',
            lineHeight: '100px',
          }}>
          我是内容
        </div>
      </Loading>
      <Loading visible={loading} mode="insert">
        <div
          style={{
            height: '100px',
            background: 'pink',
            lineHeight: '100px',
          }}>
          使用插入模式
        </div>
        <div
          style={{
            height: '100px',
            background: 'wheat',
            lineHeight: '100px',
          }}>
          但因为是多个元素，所以变为了包裹元素
        </div>
      </Loading>
    </Space>
  );
};

export default App;
