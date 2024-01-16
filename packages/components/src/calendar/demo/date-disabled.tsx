/**
 * title: 禁用日期
 */

import { Calendar } from '@tool-pack/react-ui';
import React from 'react';

const now = new Date();
const arr = [now.getFullYear(), now.getMonth()] as const;
const date = now.getDate();

const yesterday = new Date(...arr, date - 1);
const tomorrow = new Date(...arr, date + 1);

const App: React.FC = () => {
  return (
    <>
      <h3>禁选昨天和明天</h3>
      <Calendar
        dateDisabled={(date) => {
          return isSameDate(yesterday, date) || isSameDate(tomorrow, date);
        }}
      />
    </>
  );
};

function isSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

export default App;
