/**
 * title: 自定义单元格文案
 */

import { Calendar } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Calendar
      dateCell={(d, attrs) => (
        <td {...attrs}>{`${[d.getMonth() + 1, d.getDate()]
          .map(String)
          .map((v) => v.padStart(2, '0'))
          .join('-')}`}</td>
      )}
    />
  );
};

export default App;
