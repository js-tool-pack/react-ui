/**
 * title: 嵌套
 */

import {
  type DropdownOptionsItem,
  type DropdownProps,
  ButtonGroup,
  useMessage,
  Dropdown,
  Tooltip,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    label: '手撕鸡',
    key: '1',
  },
  {
    children: [
      {
        label: '黄金蛋炒饭,黄金蛋炒饭',
        key: '4',
      },
      {
        label: '扬州炒饭',
        key: '5',
      },
    ],
    label: (
      <Tooltip title={'轮胎3🌟推荐'}>
        <div>蛋炒饭</div>
      </Tooltip>
    ),
    extra: '推荐 ',
    key: '2',
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: '榴莲',
    key: '3',
  },
];
const App: React.FC = () => {
  const message = useMessage();

  const onSelect: DropdownProps['onSelect'] = (option, parents) => {
    const labels = parents
      .map((opt) => {
        if (!React.isValidElement(opt.label)) return opt.label;
        return (opt.label.props as any).children.props.children;
      })
      .concat(option.label)
      .join(' => ');
    message.success(labels);
  };

  return (
    <>
      <ButtonGroup>
        <Button type="primary">菜单</Button>
        <Dropdown onSelect={onSelect} options={options} trigger="click">
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
