/**
 * title: 通过 show 控制动画
 * description: >
 *  类似 vue transition 中的 v-show 控制动画，通过这种方式隐藏的元素不会被销毁。<br />
 *  由于 children 实际每次刷新都会生成一个新的 jsx，所以需要一个 key 表明它们是同一个组件。<br />
 *  上面的例子中通过 children 控制动画的组件，如果我们调整了它的宽高那么在切换动画后会宽高会被还原，而通过 show 控制动画的组件会保持原样。<br />
 */

import { Transition, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer, useState } from 'react';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);
  const [value, setValue] = useState('');

  return (
    <Space vertical>
      <Button onClick={setVisible} type="primary" shape="round">
        切 换
      </Button>
      <Transition show={visible} name="fade">
        <textarea
          placeholder="通过show控制动画。调整两个输入框的宽高并切换动画看看它们的区别"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          rows={5}
          key={1}
        />
      </Transition>
      <Transition name="fade">
        {visible && (
          <textarea
            onChange={(e) => setValue(e.target.value)}
            placeholder="通过children控制动画"
            value={value}
            rows={5}
            key={1}
          />
        )}
      </Transition>
    </Space>
  );
};

export default App;
