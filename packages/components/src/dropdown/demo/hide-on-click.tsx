/**
 * title: 点击选项关闭弹窗
 * description: 下拉菜单默认在点击菜单项后会被隐藏，将 hideOnClick 属性设置为 false 可以关闭此功能。
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
    label: '扬州炒饭',
    key: '2',
  },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary">菜单</Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          hideOnClick={false}
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
