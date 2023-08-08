/**
 * title: 基础用法
 * description: Alert 基础用法。
 */

import React from 'react';
import { Alert } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <>
      <Alert title={`提示`}>foo bar</Alert>
    </>
  );
};

export default App;
