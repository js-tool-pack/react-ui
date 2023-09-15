/**
 * title: 基础用法
 */

import { TagProps, Space, Tag } from '@tool-pack/react-ui';
import React from 'react';
const types = [
  'primary',
  'success',
  'info',
  'warning',
  'error',
] satisfies TagProps['type'][];
const App: React.FC = () => {
  return (
    <Space>
      <Tag>DEFAULT</Tag>
      {types.map((type) => (
        <Tag type={type} key={type}>
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
