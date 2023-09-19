/**
 * title: 前后缀
 */

import { Icons, Input, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <Input
        prefix={
          <Icon>
            <Icons.CircleInfoFill />
          </Icon>
        }
        placeholder="前缀"
        clearable
      />
      <br />
      <Input
        suffix={
          <Icon>
            <Icons.CircleInfoFill />
          </Icon>
        }
        placeholder="后缀"
        clearable
      />
    </>
  );
};

export default App;
