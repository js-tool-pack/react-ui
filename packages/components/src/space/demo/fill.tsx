/**
 * title: 填充
 * description: 设置子元素填充可使用fill和fillRatio, fillRatio默认100。注意：Space 嵌套的话，如子Space设置fillRatio会影响自身，见第三个Space。
 */

import React from 'react';
import { Space } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const style: React.CSSProperties = { width: '100px' };
  const style2: React.CSSProperties = { height: '100px' };
  return (
    <Space vertical fill>
      <Space style={{ height: '200px' }} fill>
        <div style={{ ...style, flex: 1, background: '#1677ff' }}></div>
        <div style={{ ...style, background: '#f56c6c' }}></div>
      </Space>
      <Space style={{ width: '100%' }} vertical fill fillRatio={50}>
        <div
          style={{
            ...style2,
            background: '#1677ff',
          }}></div>
        <div style={{ ...style2, background: '#f56c6c' }}></div>
      </Space>
    </Space>
  );
};

export default App;
