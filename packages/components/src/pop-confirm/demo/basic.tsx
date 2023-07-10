/**
 * title: 基础用法
 * description: PopConfirm 基础用法。
 */

import React from 'react';
import { Button, PopConfirm } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <PopConfirm content="确认要删除？">
      <Button>删除</Button>
    </PopConfirm>
  );
};

export default App;
