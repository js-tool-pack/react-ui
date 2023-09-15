/**
 * title: 大小
 */

import { TagProps, Space, Tag } from '@tool-pack/react-ui';
import React from 'react';
const sizes = ['small', 'medium', 'large'] satisfies TagProps['size'][];
const App: React.FC = () => {
  return (
    <Space>
      <Tag closeable>DEFAULT</Tag>
      {sizes.map((size) => (
        <Tag size={size} key={size} closeable>
          {size.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
