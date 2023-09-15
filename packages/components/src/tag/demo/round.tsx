/**
 * title: 圆角
 */

import { TagProps, Space, Tag } from '@tool-pack/react-ui';
import React from 'react';

const sizes = ['small', 'medium', 'large'] satisfies TagProps['size'][];
const App: React.FC = () => {
  return (
    <Space>
      {sizes.map((size) => (
        <Tag size={size} key={size} round>
          {size.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
