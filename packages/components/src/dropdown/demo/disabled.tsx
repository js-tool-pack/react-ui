/**
 * title: 禁止点击
 */

import {
  type DropdownOptionsItem,
  ButtonGroup,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    label: '黄金蛋炒饭',
    key: '1',
  },
  {
    disabled: true,
    label: '扬州炒饭',
    key: '2',
  },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary" plain="dashed">
          菜单
        </Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
          trigger="click"
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
          />
        </Dropdown>
      </ButtonGroup>
    </>
  );
};

export default App;
