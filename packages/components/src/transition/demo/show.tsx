/**
 * title: 通过 show 控制动画
 * description: >
 *  类似 vue transition 中的 v-show 控制动画，通过这种方式隐藏的元素不会被销毁。<br />
 *  由于 children 实际每次刷新都会生成一个新的 jsx，所以需要一个 key 表明它们是同一个组件。<br />
 *  上面的例子中通过 children 控制动画的组件，如果我们调整了它的宽高那么在切换动画后会宽高会被还原，而通过 show 控制动画的组件会保持原样。<br />
 *  注意：不要在子元素标签的行内样式上设置 display，不然组件出场时会丢失 display 属性
 */

import React, { useReducer, useState } from 'react';
import { Button, Transition, Space } from '@tool-pack/react-ui';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);
  const [value, setValue] = useState('');

  return (
    <Space vertical>
      <Button type="primary" shape="round" onClick={setVisible}>
        切 换
      </Button>
      <Transition name="fade" show={visible} appear>
        <textarea
          key={1}
          value={value}
          rows={5}
          onChange={(e) => setValue(e.target.value)}
          placeholder="通过show控制动画。调整两个输入框的宽高并切换动画看看它们的区别"
        />
      </Transition>
      <Transition name="fade" appear>
        {visible && (
          <textarea
            key={1}
            value={value}
            rows={5}
            onChange={(e) => setValue(e.target.value)}
            placeholder="通过children控制动画"
          />
        )}
      </Transition>
    </Space>
  );
};

export default App;
