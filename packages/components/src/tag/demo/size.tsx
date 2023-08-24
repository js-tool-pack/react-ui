/**
 * title: 大小
 */

import React from 'react';
import { Space, Tag, TagProps } from '@tool-pack/react-ui';
const sizes = ['small', 'medium', 'large'] satisfies TagProps['size'][];
const App: React.FC = () => {
  return (
    <Space>
      <Tag closeable>DEFAULT</Tag>
      {sizes.map((size) => (
        <Tag key={size} closeable size={size}>
          {size.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
