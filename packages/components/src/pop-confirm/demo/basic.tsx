/**
 * title: 基础用法
 * description: PopConfirm 基础用法。
 */

import { PopConfirm, Button } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <PopConfirm content="确认要删除？">
      <Button>删除</Button>
    </PopConfirm>
  );
};

export default App;
