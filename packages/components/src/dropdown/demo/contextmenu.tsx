/**
 * title: 鼠标右击启动
 */

import React from 'react';
import {
  Dropdown,
  DropdownOptionsItem,
  DropdownProps,
  Icons,
  useMessage,
} from '@tool-pack/react-ui';

const options: DropdownOptionsItem[] = [
  {
    label: '饭菜类',
    type: 'group',
    key: 'meals',
    icon: <Icons.CircleInfo />,
    children: [
      {
        key: 'shreddedChicken',
        label: '手撕鸡',
      },
      {
        label: '炒饭',
        key: 'friedRice',
        type: 'group',
        children: [
          {
            key: 'hjdcf',
            label: '黄金蛋炒饭',
          },
          {
            key: 'yzcf',
            label: '扬州炒饭',
          },
        ],
      },
    ],
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    label: '水果类',
    key: 'fruit',
    children: [
      {
        label: '榴莲',
        key: 'durian',
      },
      {
        label: '🍍',
        key: 'bl',
        children: [
          {
            label: '菠萝',
            key: 'pineapple',
          },
          {
            label: '凤梨',
            key: 'ananas',
          },
        ],
      },
    ],
  },
  {
    key: 'other',
    label: '其它',
    disabled: true,
  },
];
const App: React.FC = () => {
  const message = useMessage();

  const onSelect: DropdownProps['onSelect'] = (option, parents) => {
    const labels = parents
      .map((opt) => opt.label)
      .concat(option.label)
      .join(' => ');
    message.success(labels);
  };
  return (
    <div>
      <Dropdown trigger="contextmenu" options={options} onSelect={onSelect}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '200px',
            background: 'deeppink',
          }}>
          鼠标右击
        </div>
      </Dropdown>
    </div>
  );
};

export default App;
