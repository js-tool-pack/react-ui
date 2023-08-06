/**
 * title: 边框
 * description: 可以添加边框。
 */

import React, { useState } from 'react';
import { Alert, AlertProps, Space } from '@tool-pack/react-ui';

const Types: Required<AlertProps>['type'][] = [
  'default',
  'info',
  'success',
  'warning',
  'error',
];
const App: React.FC = () => {
  const [bordered, setBordered] = useState(true);

  return (
    <Space vertical fill>
      <label>
        边框：
        <input
          type="checkbox"
          checked={bordered}
          onChange={(e) => setBordered(e.target.checked)}
        />
      </label>
      {Types.map((t) => (
        <Alert key={t} bordered={bordered} type={t} title={`${t} tips`}>
          foo bar
        </Alert>
      ))}
    </Space>
  );
};

export default App;
