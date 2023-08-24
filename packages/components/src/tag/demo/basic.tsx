/**
 * title: 基础用法
 */

import React from 'react';
import { Space, Tag, TagProps } from '@tool-pack/react-ui';
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
        <Tag key={type} type={type}>
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
