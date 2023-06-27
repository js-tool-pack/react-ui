/**
 * title: show与appear搭配
 * description: >
 *  show 可以与 appear: null 搭配。<br />
 *  当 appear 为 null，show 为 false（组件第一次渲染） 时，组件 dom 不会渲染出来，当切换动画显示再隐藏时，该组件 dom 不会移除。<br />
 *  相当于通过 show 和 children 控制动画的结合，既不会一开始渲染太多 dom，也不会重复渲染 dom。<br />
 */

import React, { useReducer, useState } from 'react';
import { Button, Transition, Space } from '@tool-pack/react-ui';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, false);
  const [value, setValue] = useState('');

  return (
    <Space vertical>
      <Button type="primary" shape="round" onClick={setVisible}>
        切 换
      </Button>
      <Transition name="fade" show={visible} appear={null}>
        <textarea
          key={1}
          value={value}
          rows={5}
          onChange={(e) => setValue(e.target.value)}
          placeholder="通过show控制动画。调整两个输入框的宽高并切换动画看看它们的区别"
        />
      </Transition>
    </Space>
  );
};

export default App;
