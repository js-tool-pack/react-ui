/**
 * title: 鼠标右击启动
 */

import {
  DropdownOptionsItem,
  DropdownProps,
  useMessage,
  Dropdown,
  Icons,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    children: [
      {
        key: 'shreddedChicken',
        label: '手撕鸡',
      },
      {
        children: [
          {
            label: '黄金蛋炒饭',
            key: 'hjdcf',
          },
          {
            label: '扬州炒饭',
            key: 'yzcf',
          },
        ],
        key: 'friedRice',
        type: 'group',
        label: '炒饭',
      },
    ],
    icon: <Icons.CircleInfo />,
    type: 'group',
    label: '饭菜类',
    key: 'meals',
  },
  {
    type: 'divider',
    key: 'd1',
  },
  {
    children: [
      {
        key: 'durian',
        label: '榴莲',
      },
      {
        children: [
          {
            key: 'pineapple',
            label: '菠萝',
          },
          {
            key: 'ananas',
            label: '凤梨',
          },
        ],
        label: '🍍',
        key: 'bl',
      },
    ],
    label: '水果类',
    key: 'fruit',
  },
  {
    disabled: true,
    key: 'other',
    label: '其它',
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
      <Dropdown trigger="contextmenu" onSelect={onSelect} options={options}>
        <div
          style={{
            justifyContent: 'center',
            background: 'deeppink',
            alignItems: 'center',
            display: 'flex',
            height: '200px',
          }}
        >
          鼠标右击
        </div>
      </Dropdown>
    </div>
  );
};

export default App;
