/**
 * title: 可关闭
 * description: 可以关掉。
 */

import React from 'react';
import { Alert, AlertProps } from '@tool-pack/react-ui';

const Types: Required<AlertProps>['type'][] = [
  'default',
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
          key={t}
          closable
          type={t}
          title={`${t} tips`}
          attrs={{ style: { marginBottom: '10px' } }}>
          foo bar
        </Alert>
      ))}
    </>
  );
};

export default App;
