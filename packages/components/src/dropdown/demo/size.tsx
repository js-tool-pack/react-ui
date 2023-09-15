/**
 * title: 尺寸
 */

import {
  type DropdownOptionsItem,
  ButtonGroup,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Space,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  {
    label: '黄金蛋炒饭',
    key: '1',
  },
  {
    children: [
      {
        label: 'test',
        key: 'test',
      },
    ],
    label: '扬州炒饭',
    key: '2',
  },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <Space>
      <ButtonGroup>
        <Button type="primary" size="small">
          small
        </Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
          trigger="click"
          size={'small'}
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
            size="small"
          />
        </Dropdown>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" size="medium">
          medium
        </Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
          trigger="click"
          size="medium"
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
            size="medium"
          />
        </Dropdown>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" size="large">
          large
        </Button>
        <Dropdown
          onSelect={(option) => message.info(option.label)}
          options={options}
          trigger="click"
          size="large"
        >
          <Button
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
            type="primary"
            size="large"
          />
        </Dropdown>
      </ButtonGroup>
    </Space>
  );
};

export default App;
