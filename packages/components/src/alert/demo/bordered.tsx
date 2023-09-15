/**
 * title: 边框
 * description: 可以添加或移除边框。
 */

import { AlertProps, Switch, Alert, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const Types: Required<AlertProps>['type'][] = [
  'primary',
  'info',
  'success',
  'warning',
  'error',
];
const App: React.FC = () => {
  const [bordered, setBordered] = useState(false);

  return (
    <Space vertical fill>
      <div>
        <Switch onChange={setBordered} checked={bordered} />
      </div>
      {Types.map((t) => (
        <Alert bordered={bordered} title={`${t} tips`} type={t} key={t}>
          foo bar
        </Alert>
      ))}
    </Space>
  );
};

export default App;
