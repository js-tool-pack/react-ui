/**
 * title: 行内元素
 * description: 注意：display为inline的元素无法调整宽高。
 */

import { Resizer } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div>
      <span
        style={{ background: 'rgb(222 133 210 / 62%)', position: 'relative' }}
      >
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
