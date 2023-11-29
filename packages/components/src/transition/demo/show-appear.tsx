/**
 * title: show与appear搭配
 * description: >
 *  show 可以与 appear: null 搭配。<br />
 *  当 appear 为 null，show 为 false（组件第一次渲染） 时，组件 dom 不会渲染出来，当切换动画显示再隐藏时，该组件 dom 不会移除。<br />
 *  相当于通过 show 和 children 控制动画的结合，既不会一开始渲染太多 dom，也不会重复渲染 dom。<br />
 */

import { Transition, Button, Space } from '@tool-pack/react-ui';
import React, { useReducer, useState } from 'react';
import './base.scss';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, false);
  const [value, setValue] = useState('');

  return (
    <Space vertical>
      <Button onClick={setVisible} type="primary" shape="round">
        切 换
      </Button>
      <Transition show={visible} appear={null} name="fade">
        <textarea
          placeholder="show与appear搭配. 当初始未显示时不会渲染 dom，之后隐藏不会销毁 dom"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          rows={5}
          key={1}
        />
      </Transition>
    </Space>
  );
};

export default App;
