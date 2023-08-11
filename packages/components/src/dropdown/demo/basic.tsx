/**
 * title: 基础用法
 * description: Dropdown 基础用法。
 */

import React from 'react';
import {
  Button,
  ButtonGroup,
  Dropdown,
  type DropdownOptionsItem,
  Icon,
  Icons,
  useMessage,
} from '@tool-pack/react-ui';

const options: DropdownOptionsItem[] = [
  {
    key: '1',
    label: '黄金蛋炒饭',
  },
  {
    key: '2',
    label: '扬州炒饭',
  },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary">菜单</Button>
        <Dropdown
          options={options}
          onSelect={(option) => message.info(option.label)}>
          <Button
            type="primary"
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;