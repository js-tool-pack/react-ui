/**
 * title: 边框
 */

import React, { useState } from 'react';
import { Space, Switch, Tag, TagProps } from '@tool-pack/react-ui';
const types = [
  'primary',
  'success',
  'info',
  'warning',
  'error',
] satisfies TagProps['type'][];
const App: React.FC = () => {
  const [bordered, setBordered] = useState(false);
  return (
    <Space>
      <Switch checked={bordered} onChange={setBordered} />
      {types.map((type) => (
        <Tag key={type} bordered={bordered} type={type}>
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
