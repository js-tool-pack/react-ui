/**
 * title: 格式化显示
 */

import { PickerOption, Picker } from '@tool-pack/react-ui';
import React, { useEffect, useState } from 'react';

const hours = createNumberOptions(24);
const minutes = createNumberOptions(60);
const seconds = createNumberOptions(60);

const App: React.FC = () => {
  const [value, setValue] = useState<string[]>(() => getTimeValue(new Date()));

  useEffect(() => {
    // 跟随滚动
    // const cb = () => setValue(getTimeValue(new Date()));
    // const timer = setInterval(cb, 1000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <Picker
      panelAttrs={{ style: { height: '200px' } }}
      options={[hours, minutes, seconds]}
      format={(v) => v.join(':')}
      onChange={setValue}
      value={value}
    />
  );
};

function getTimeValue(date: Date) {
  return [date.getHours(), date.getMinutes(), date.getSeconds()].map((v) =>
    String(v).padStart(2, '0'),
  );
}
function createNumberOptions(length: number): PickerOption<string>[] {
  return Array.from({ length }).map((_, i) => {
    const value = String(i).padStart(2, '0');
    return {
      label: value,
      value: value,
    };
  });
}

export default App;
