/**
 * title: 嵌套
 */

import React from 'react';
import {
  Button,
  ButtonGroup,
  Dropdown,
  type DropdownOptionsItem,
  type DropdownProps,
  Icon,
  Icons,
  Tooltip,
  useMessage,
} from '@tool-pack/react-ui';

const options: DropdownOptionsItem[] = [
  {
    key: '1',
    label: '手撕鸡',
  },
  {
    key: '2',
    label: (
      <Tooltip title={'轮胎3🌟推荐'}>
        <div>蛋炒饭</div>
      </Tooltip>
    ),
    children: [
      {
        key: '4',
        label: '黄金蛋炒饭,黄金蛋炒饭',
      },
      {
        key: '5',
        label: '扬州炒饭',
      },
    ],
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    key: '3',
    label: '榴莲',
  },
];
const App: React.FC = () => {
  const message = useMessage();

  const onSelect: DropdownProps['onSelect'] = (option, parents) => {
    const labels = parents
      .map((opt) => {
        if (!React.isValidElement(opt.label)) return opt.label;
        return opt.label.props.children.props.children;
      })
      .concat(option.label)
      .join(' => ');
    message.success(labels);
  };

  return (
    <>
      <ButtonGroup>
        <Button type="primary">菜单</Button>
        <Dropdown trigger="click" options={options} onSelect={onSelect}>
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
