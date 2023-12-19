/**
 * title: 自定义星期的开始日
 */

import { Calendar, Select, Space } from '@tool-pack/react-ui';
import React, { useState } from 'react';

type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;
const weekDayNames = ['天', '一', '二', '三', '四', '五', '六'] as const;
const options = weekDayNames.map((n, index) => ({
  label: '星期' + n,
  value: index,
}));

const App: React.FC = () => {
  const [day, setDay] = useState<Day>(1);
  return (
    <>
      <Space>
        星期开始日：
        <Select
          attrs={{ style: { width: '100px' } }}
          onChange={setDay}
          options={options}
          size="small"
          value={day}
        />
      </Space>
      <Calendar firstDay={day} />
    </>
  );
};

export default App;
