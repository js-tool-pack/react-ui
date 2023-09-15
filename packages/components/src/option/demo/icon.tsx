/**
 * title: icon
 */

import { Option, Icons } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return <Option icon={<Icons.CircleInfo />}>foo bar</Option>;
};

export default App;
