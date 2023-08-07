/**
 * title: 内容
 */

import React from 'react';
import { Icon, Icons, Space, Switch } from '@tool-pack/react-ui';

const App: React.FC = () => {
  return (
    <Space>
      <Switch
        size="small"
        uncheckedChildren={
          <Icon>
            <Icons.Close />
          </Icon>
        }
        checkedChildren="✔︎"
      />
      <Switch
        uncheckedChildren="若非群玉山头见"
        checkedChildren="会向瑶台月下逢"
      />
      <Switch
        checked
        size="large"
        uncheckedChildren="落霞与孤鹜齐飞"
        checkedChildren="秋水共长天一色"
      />
    </Space>
  );
};

export default App;
