/**
 * title: 尾部插槽
 */

import {
  type DropdownOptionsItem,
  ButtonGroup,
  WordBalloon,
  useMessage,
  Dropdown,
  Button,
  Icons,
  Icon,
} from '@tool-pack/react-ui';
import React from 'react';

const options: DropdownOptionsItem[] = [
  { label: '黄金蛋炒饭', key: '1' },
  { label: '扬州炒饭', key: '2' },
];
const App: React.FC = () => {
  const message = useMessage();
  return (
    <>
      <ButtonGroup>
        <Button type="primary">菜单</Button>
        <Dropdown
          footer={<WordBalloon placement="bottom">foo bar</WordBalloon>}
          onSelect={(option) => message.info(option.label)}
          options={options}
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
