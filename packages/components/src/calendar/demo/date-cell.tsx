/**
 * title: 自定义单元格文案
 */

import { Calendar } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <Calendar dateCell={(d) => `${d.getMonth()}-${d.getDate()}`} />;
};

export default App;
