/**
 * title: 禁用
 */

import { TagProps, Switch, Space, Tag } from '@tool-pack/react-ui';
import React, { useState } from 'react';
const types = [
  'success',
  'info',
  'warning',
  'error',
] satisfies TagProps['type'][];
const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <Space>
      <Switch onChange={setDisabled} checked={disabled} />
      <Tag disabled={disabled} checkable checked>
        DEFAULT
      </Tag>
      {types.map((type) => (
        <Tag disabled={disabled} type={type} key={type}>
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
