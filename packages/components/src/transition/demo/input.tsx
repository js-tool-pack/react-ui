/**
 * debug: true
 * title: 输入框作为子元素
 * description: >
 *  输入框作为子元素，确认输入文字时不会触发动画
 */

import { Transition, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer, useState } from 'react';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <Space style={{ flexWrap: 'nowrap' }} vertical>
      <Button onClick={setVisible} type="primary" shape="round">
        切 换
      </Button>
      <Transition name="fade">
        {visible && (
          <input
            onChange={(e) => setValue(e.target.value)}
            placeholder="输入文字时不会触发动画"
            value={value}
            type="text"
            key={0}
          />
        )}
      </Transition>
      <Transition name="fade">
        {visible && (
          <input
            onChange={(e) => setValue2(e.target.value)}
            placeholder="输入文字时会触发动画"
            value={value2}
            type="text"
          />
        )}
      </Transition>
    </Space>
  );
};

export default App;
