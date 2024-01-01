/**
 * title: 基础用法
 * description: Picker 基础用法。
 */

import { OptionValueType, PickerOption, Picker } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const numberOptions = createLetterOptions('0'.charCodeAt(0), 10);
const upOptions = createLetterOptions('A'.charCodeAt(0), 26);
const lowerOptions = createLetterOptions('a'.charCodeAt(0), 26);

const App: React.FC = () => {
  const [value, setValue] = useState<OptionValueType[]>([
    numberOptions[0]!.value,
    upOptions[1]!.value,
    lowerOptions[2]!.value,
    numberOptions[2]!.value,
    upOptions[1]!.value,
    lowerOptions[0]!.value,
  ]);
  return (
    <>
      已选：[{value.toString()}]
      <br />
      <Picker
        options={[
          numberOptions,
          upOptions,
          lowerOptions,
          numberOptions,
          upOptions,
          lowerOptions,
        ]}
        panelAttrs={{ style: { height: '200px' } }}
        onChange={setValue}
        value={value}
      />
    </>
  );
};

function createLetterOptions(charCode: number, length: number): PickerOption[] {
  return Array.from({ length }).map((_, i) => {
    const letter = String.fromCharCode(charCode + i);
    return {
      label: letter,
      value: letter,
    };
  });
}

export default App;
