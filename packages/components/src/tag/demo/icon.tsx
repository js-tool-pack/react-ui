/**
 * title: 图标
 */

import { type TagProps, Space, Icons, Tag } from '@tool-pack/react-ui';
import React from 'react';
const sizes = ['small', 'medium', 'large'] satisfies TagProps['size'][];
const App: React.FC = () => {
  return (
    <Space>
      <Tag icon={<Icons.CircleWarningFill />} type="warning" closeable>
        DEFAULT
      </Tag>
      {sizes.map((size) => (
        <Tag
          icon={<Icons.CircleSuccessFill />}
          type="success"
          size={size}
          key={size}
          closeable
          round
        >
          {size.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
