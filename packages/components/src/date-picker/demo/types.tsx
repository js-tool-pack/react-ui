/**
 * title: 分类
 * description: DatePicker 基础用法。
 */

import { DatePicker, Select, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const Types = ['year', 'month', 'datetime', 'date', 'time'] as const;
const options = Types.map((t) => ({ label: t, value: t }));

const App: React.FC = () => {
  const [type, setType] = useState<(typeof Types)[number]>('date');
  return (
    <Space>
      <Select onChange={setType} options={options} value={type} />
      <DatePicker type={type} />
    </Space>
  );
};

export default App;
