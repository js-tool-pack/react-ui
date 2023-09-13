/**
 * title: extra
 */

import React from 'react';
import { Option, Icon, Icons } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Option
      extra={
        <Icon>
          <Icons.Right />
        </Icon>
      }>
      foo bar
    </Option>
  );
};

export default App;
