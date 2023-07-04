/**
 * title: 行内元素
 * description: 注意：display为inline的元素无法调整宽高。
 */

import React from 'react';
import { Resizer } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <div>
      <span
        style={{ position: 'relative', background: 'rgb(222 133 210 / 62%)' }}>
        我是行内元素
        <br />
        我是行内元素
        <Resizer />
        <Resizer placement="right" />
      </span>
    </div>
  );
};

export default App;
