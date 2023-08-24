/**
 * title: 禁用
 */

import React, { useState } from 'react';
import { Space, Switch, Tag, TagProps } from '@tool-pack/react-ui';
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
      <Switch checked={disabled} onChange={setDisabled} />
      <Tag disabled={disabled} checkable checked>
        DEFAULT
      </Tag>
      {types.map((type) => (
        <Tag key={type} disabled={disabled} type={type}>
          {type.toUpperCase()}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
