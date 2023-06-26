/**
 * debug: true
 * title: 输入框作为子元素
 * description: >
 *  输入框作为子元素，确认输入文字时不会触发动画
 */

import React, { useReducer, useState } from 'react';
import { Space, Button, Transition } from '@tool-pack/react-ui';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <Space vertical style={{ flexWrap: 'nowrap' }}>
      <Button type="primary" shape="round" onClick={setVisible}>
        切 换
      </Button>
      <Transition name="fade">
        {visible && (
          <input
            key={0}
            type="text"
            placeholder="输入文字时不会触发动画"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </Transition>
      <Transition name="fade">
        {visible && (
          <input
            type="text"
            placeholder="输入文字时会触发动画"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
        )}
      </Transition>
    </Space>
  );
};

export default App;
