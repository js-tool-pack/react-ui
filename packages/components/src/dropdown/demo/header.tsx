/**
 * title: 头部插槽
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
  { key: '1', label: '黄金蛋炒饭' },
  { key: '2', label: '扬州炒饭' },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary">菜单</Button>
        <Dropdown
          header={<h2>选什么好呢</h2>}
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
