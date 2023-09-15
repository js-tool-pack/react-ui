/**
 * title: 可关闭
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
      {types.map((type) => (
        <Tag
          onClose={(e) => {
            if (!window.confirm(`是否关闭 '${type || 'default'}' 标签`)) {
              e.preventDefault();
            }
          }}
          type={type}
          key={type}
          closeable
        >
          {type}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
