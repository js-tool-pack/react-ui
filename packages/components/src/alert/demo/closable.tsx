/**
 * title: 可关闭
 * description: 可以关掉。
 */

import { AlertProps, Alert } from '@tool-pack/react-ui';
import React from 'react';

const Types: Required<AlertProps>['type'][] = [
  'primary',
  'info',
  'success',
  'warning',
  'error',
];
const App: React.FC = () => {
  return (
    <>
      {Types.map((t) => (
        <Alert
          attrs={{ style: { marginBottom: '10px' } }}
          title={`${t} tips`}
          closable
          type={t}
          key={t}
        >
          foo bar
        </Alert>
      ))}
    </>
  );
};

export default App;
