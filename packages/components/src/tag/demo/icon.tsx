/**
 * title: 图标
 */

import React from 'react';
import { Space, Tag, type TagProps, Icons } from '@tool-pack/react-ui';
const sizes = ['small', 'medium', 'large'] satisfies TagProps['size'][];
const App: React.FC = () => {
  return (
    <Space>
      <Tag closeable type="warning" icon={<Icons.CircleWarningFill />}>
        DEFAULT
      </Tag>
      {sizes.map((size) => (
        <Tag
          round
          type="success"
          key={size}
          icon={<Icons.CircleSuccessFill />}
          closeable
          size={size}>
          {size.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
