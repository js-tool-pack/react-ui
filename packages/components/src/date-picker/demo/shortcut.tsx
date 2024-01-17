/**
 * title: 快捷方式
 */

import { DatePicker } from '@tool-pack/react-ui';
import React from 'react';

const now = new Date();
const arr = [now.getFullYear(), now.getMonth()] as const;
const date = now.getDate();

const yesterday = new Date(...arr, date - 1);
const tomorrow = new Date(...arr, date + 1);

const App: React.FC = () => {
  return (
    <>
      <DatePicker shortcuts={[{ value: new Date(), label: '今天' }]} />
      <br />
      <DatePicker
        shortcuts={[
          {
            value: [yesterday, now],
            label: '昨天到今天',
          },
          {
            value: [now, tomorrow],
            label: '今天到明天',
          },
          {
            value: [yesterday, tomorrow],
            label: '昨天到明天',
          },
        ]}
        range
      />
    </>
  );
};

export default App;
