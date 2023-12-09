/**
 * title: 刻度
 */

import { SliderMarks, Tooltip, Slider } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const marks: SliderMarks = {
  70: {
    label: (
      <Tooltip title="从心所欲不逾矩">
        <span style={{ color: 'pink' }}>从…矩</span>
      </Tooltip>
    ),
  },
  50: { reverse: true, label: '知天命' },
  60: { label: '耳顺' },
  40: { label: '不惑' },
  30: { label: '而立' },
};
const App: React.FC = () => {
  const [value, setValue] = useState<[number, number]>([30, 70]);
  return (
    <>
      <Slider onChange={(v) => setValue(v)} value={value} marks={marks} />
      <div style={{ textAlign: 'center', height: '200px' }}>
        <Slider
          onChange={(v) => setValue(v)}
          value={value}
          marks={marks}
          vertical
        />
        <Slider
          attrs={{ style: { marginLeft: '150px' } }}
          onChange={(v) => setValue(v)}
          value={value}
          marks={marks}
          vertical
          reverse
        />
      </div>
      <Slider
        onChange={(v) => setValue(v)}
        value={value}
        marks={marks}
        reverse
      />
      <Slider value={value} marks={marks} disabled />
      <br />[{value.toString()}]
    </>
  );
};

export default App;
