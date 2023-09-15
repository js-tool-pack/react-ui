/**
 * title: 插入模式
 * description: 插入模式会loading内容插入到唯一子元素下；如果传入的children有多个元素，会变为包裹模式。<br />
 *   **注意：有滚动条的元素不适合使用插入模式(由于滚动条元素的 overflow 属性会导致绝对定位跟随滚动，使得遮罩覆盖不了父元素)，建议使用包裹模式。**
 */

import { Loading, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

const App: React.FC = () => {
  const [loading, setLoading] = useReducer((l) => !l, false);

  return (
    <Space style={{ textAlign: 'center' }} gap={20} vertical fill>
      <Button onClick={setLoading} type="primary">
        {loading ? '隐藏' : '显示'}loading
      </Button>
      <Loading visible={loading} mode="insert">
        <div
          style={{
            background: 'deeppink',
            lineHeight: '100px',
            height: '100px',
          }}
        >
          我是内容
        </div>
      </Loading>
      <Loading visible={loading} mode="insert">
        <div
          style={{
            lineHeight: '100px',
            background: 'pink',
            height: '100px',
          }}
        >
          使用插入模式
        </div>
        <div
          style={{
            background: 'wheat',
            lineHeight: '100px',
            height: '100px',
          }}
        >
          但因为是多个元素，所以变为了包裹元素
        </div>
      </Loading>
    </Space>
  );
};

export default App;
