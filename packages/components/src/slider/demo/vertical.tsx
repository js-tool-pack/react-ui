/**
 * title: 竖排
 */

import { Slider } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', height: '200px' }}>
      <Slider value={20} vertical />
      <Slider
        attrs={{ style: { marginLeft: '50px' } }}
        value={50}
        vertical
        disabled
      />
      <Slider
        attrs={{ style: { marginLeft: '50px' } }}
        value={50}
        vertical
        reverse
      />
    </div>
  );
};

export default App;
