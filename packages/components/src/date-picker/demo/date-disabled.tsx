/**
 * title: 禁用日期
 */

import { DatePicker } from '@tool-pack/react-ui';
import React from 'react';

const now = new Date();
const arr = [now.getFullYear(), now.getMonth()] as const;
const date = now.getDate();

const prev = new Date(...arr, date - 7).getTime();
const next = new Date(...arr, date + 7).getTime();

const App: React.FC = () => {
  return (
    <>
      <h3>7 天内不可选</h3>
      <DatePicker dateDisabled={dateDisabled} />
      <br />
      <DatePicker dateDisabled={dateDisabled} range />
    </>
  );
  function dateDisabled(date: Date): boolean {
    const time = date.getTime();
    return prev <= time && time <= next && !isSameDate(now, date);
  }
};

function isSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

export default App;
