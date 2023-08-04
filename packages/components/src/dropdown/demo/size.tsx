/**
 * title: 尺寸
 */

import React from 'react';
import {
  Button,
  ButtonGroup,
  Dropdown,
  type DropdownOptionsItem,
  Icon,
  Icons,
  Space,
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
    children: [
      {
        label: 'test',
        key: 'test',
      },
    ],
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
          trigger="click"
          size={'small'}
          options={options}
          onSelect={(option) => message.info(option.label)}>
          <Button
            type="primary"
            size="small"
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
          />
        </Dropdown>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" size="medium">
          medium
        </Button>
        <Dropdown
          trigger="click"
          size="medium"
          options={options}
          onSelect={(option) => message.info(option.label)}>
          <Button
            type="primary"
            size="medium"
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
          />
        </Dropdown>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" size="large">
          large
        </Button>
        <Dropdown
          trigger="click"
          options={options}
          size="large"
          onSelect={(option) => message.info(option.label)}>
          <Button
            type="primary"
            size="large"
            icon={
              <Icon>
                <Icons.Down />
              </Icon>
            }
          />
        </Dropdown>
      </ButtonGroup>
    </Space>
  );
};

export default App;
