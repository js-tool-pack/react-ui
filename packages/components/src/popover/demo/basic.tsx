/**
 * title: 基本用法
 */

import { Popover } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Popover content="不如须臾之所学也">
        <span>吾尝终日而思矣</span>
      </Popover>
      ；
      <Popover content={<span>不如登高之博见也</span>}>
        <span>吾尝跂而望矣</span>
      </Popover>
    </>
  );
};

export default App;
