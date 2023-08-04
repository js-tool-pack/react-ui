/**
 * title: icon
 */

import React from 'react';
import { Option, Icons } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return <Option icon={<Icons.CircleInfo />}>foo bar</Option>;
};

export default App;
