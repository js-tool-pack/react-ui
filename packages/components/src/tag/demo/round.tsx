/**
 * title: 圆角
 */

import React from 'react';
import { Space, Tag, TagProps } from '@tool-pack/react-ui';

const sizes = ['small', 'medium', 'large'] satisfies TagProps['size'][];
const App: React.FC = () => {
  return (
    <Space>
      {sizes.map((size) => (
        <Tag round key={size} size={size}>
          {size.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
