/**
 * title: 范围
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
      <DatePicker type={type} range />
    </Space>
  );
};

export default App;
