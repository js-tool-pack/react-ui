/**
 * title: 禁用
 */

import { Slider, Switch } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      disabled:
      <Switch onChange={setDisabled} checked={disabled} size="small" />
      <Slider disabled={disabled} value={55} />
    </>
  );
};

export default App;
