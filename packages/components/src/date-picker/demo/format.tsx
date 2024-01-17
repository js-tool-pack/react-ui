/**
 * title: 日期格式化
 */

import { DatePicker } from '@tool-pack/react-ui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState(() => new Date());
  return (
    <>
      <div>{value.toString()}</div>
      <DatePicker
        format="yyyy年MM月dd日 hh时mm分ss秒"
        onChange={setValue}
        value={value}
      />
    </>
  );
};

export default App;
