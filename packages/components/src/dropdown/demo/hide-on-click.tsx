/**
 * title: 点击选项关闭弹窗
 * description: 下拉菜单默认在点击菜单项后会被隐藏，将 hideOnClick 属性设置为 false 可以关闭此功能。
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
          trigger="click"
          options={options}
          hideOnClick={false}
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
