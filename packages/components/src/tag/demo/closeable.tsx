/**
 * title: 可关闭
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
      {types.map((type) => (
        <Tag
          closeable
          key={type}
          type={type}
          onClose={(e) => {
            if (!window.confirm(`是否关闭 '${type || 'default'}' 标签`)) {
              e.preventDefault();
            }
          }}>
          {type}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
