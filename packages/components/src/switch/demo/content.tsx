/**
 * title: 内容
 */

import { Switch, Icons, Space, Icon } from '@tool-pack/react-ui';
import React from 'react';

const App: React.FC = () => {
  return (
    <Space>
      <Switch
        uncheckedChildren={
          <Icon>
            <Icons.Close />
          </Icon>
        }
        checkedChildren="✔︎"
        size="small"
      />
      <Switch
        uncheckedChildren="若非群玉山头见"
        checkedChildren="会向瑶台月下逢"
      />
      <Switch
        uncheckedChildren="落霞与孤鹜齐飞"
        checkedChildren="秋水共长天一色"
        size="large"
        checked
      />
    </Space>
  );
};

export default App;
