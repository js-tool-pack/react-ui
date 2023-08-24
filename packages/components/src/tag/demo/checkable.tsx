/**
 * title: 可选
 */

import React from 'react';
import { Space, Tag, TagProps, useMessageHolder } from '@tool-pack/react-ui';
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
          checkable
          key={type}
          type={type}
          onChange={(c) => message[type]('checked:' + c)}>
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
