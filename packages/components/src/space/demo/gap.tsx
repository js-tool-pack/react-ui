/**
 * title: 自定义间距大小
 * description: space 可以使用 gap 参数自定义间距大小; gap 默认 8px; 传入数字时会使用 px 作为单位。
 */

import React from 'react';
import { Space, Button } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Space gap={20}>
      <Button type="primary">bt1</Button>
      <Button type="danger">bt2</Button>
    </Space>
  );
};

export default App;
