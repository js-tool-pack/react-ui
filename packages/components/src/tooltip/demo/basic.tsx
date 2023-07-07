/**
 * title: 基本用法
 */

import React from 'react';
import { Tooltip, Divider } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <>
      <Tooltip title="不如须臾之所学也">
        <span>吾尝终日而思矣</span>
      </Tooltip>
      ；
      <Tooltip title="不如登高之博见也">
        <span>吾尝跂而望矣</span>
      </Tooltip>
      <Divider />
      <Tooltip title="得知此事要躬行">
        <span>纸上得来终觉浅</span>
      </Tooltip>
    </>
  );
};

export default App;
