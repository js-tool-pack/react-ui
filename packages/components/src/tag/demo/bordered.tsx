/**
 * title: 边框
 */

import { TagProps, Switch, Space, Tag } from '@tool-pack/react-ui';
import React, { useState } from 'react';
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
      <Switch onChange={setBordered} checked={bordered} />
      {types.map((type) => (
        <Tag bordered={bordered} type={type} key={type}>
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
