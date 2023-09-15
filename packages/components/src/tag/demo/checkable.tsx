/**
 * title: 可选
 */

import { useMessageHolder, TagProps, Space, Tag } from '@tool-pack/react-ui';
import React from 'react';
const types = [
  'success',
  'info',
  'warning',
  'error',
] satisfies TagProps['type'][];
const App: React.FC = () => {
  const [message, holder] = useMessageHolder();
  return (
    <Space>
      {holder}
      <Tag closeable checkable checked>
        PRIMARY
      </Tag>
      {types.map((type) => (
        <Tag
          onChange={(c) => message[type]('checked:' + c)}
          type={type}
          key={type}
          checkable
        >
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
