/**
 * title: 基础用法
 * description: Alert 基础用法。
 */

import { Alert } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Alert title={`提示`}>foo bar</Alert>
    </>
  );
};

export default App;
