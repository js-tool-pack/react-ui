/**
 * title: 单独使用
 */

import {
  OptionValueType,
  PickerOption,
  PickerPanel,
} from '@tool-pack/react-ui';
import React, { useState } from 'react';

const hours = createNumberOptions(24);
const minutes = createNumberOptions(60);
const seconds = createNumberOptions(60);

const App: React.FC = () => {
  const [value, setValue] = useState<OptionValueType[]>(() =>
    getTimeValue(new Date()),
  );

  return (
    <>
      当前时间：{value.join(':')}
      <br />
      <PickerPanel
        attrs={{ style: { height: '200px' } }}
        options={[hours, minutes, seconds]}
        onChange={setValue}
        value={value}
      />
    </>
  );
};

function getTimeValue(date: Date) {
  return [date.getHours(), date.getMinutes(), date.getSeconds()].map((v) =>
    String(v).padStart(2, '0'),
  );
}
function createNumberOptions(length: number): PickerOption[] {
  return Array.from({ length }).map((_, i) => {
    const value = String(i).padStart(2, '0');
    return {
      label: value,
      value: value,
    };
  });
}

export default App;
