/**
 * title: 隐藏头部
 * description: 当 header 为 false 时会隐藏头部
 */

import { SelectOption, Calendar, Divider, Select } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const options: SelectOption[] = [
  { label: '一月', value: 0 },
  { label: '二月', value: 1 },
  { label: '三月', value: 2 },
  { label: '四月', value: 3 },
  { label: '五月', value: 4 },
  { label: '六月', value: 5 },
  { label: '七月', value: 6 },
  { label: '八月', value: 7 },
  { label: '九月', value: 8 },
  { label: '十月', value: 9 },
  { label: '十一月', value: 10 },
  { label: '十二月', value: 11 },
];

const App: React.FC = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <div
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <div>{`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
          2,
          '0',
        )}-${String(date.getDate()).padStart(2, '0')}`}</div>
        <Select
          onChange={(v) => setDate(new Date(date.getFullYear(), v))}
          value={date.getMonth()}
          options={options}
          size="small"
        />
      </div>
      <Divider />
      <Calendar header={false} />
    </>
  );
};

export default App;
