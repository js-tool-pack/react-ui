/**
 * title: extra
 */

import { Option, Icons, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Option
      extra={
        <Icon>
          <Icons.Right />
        </Icon>
      }
    >
      foo bar
    </Option>
  );
};

export default App;
