/**
 * title: 边框
 * description: 可以添加或移除边框。
 */

import React, { useState } from 'react';
import { Alert, AlertProps, Space, Switch } from '@tool-pack/react-ui';

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
        <Switch checked={bordered} onChange={setBordered} />
      </div>
      {Types.map((t) => (
        <Alert key={t} bordered={bordered} type={t} title={`${t} tips`}>
          foo bar
        </Alert>
      ))}
    </Space>
  );
};

export default App;
