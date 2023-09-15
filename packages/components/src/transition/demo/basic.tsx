/**
 * title: 基础用法
 * description: >
 *  需要有一个name作为元素的className前缀，然后添加相应的css样式。
 */

import { Transition, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setVisible} type="primary" shape="round">
        切 换
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition name="fade">
          {/* 不要用组件库内的Button做transition，因为Button内置的transition会混淆 */}
          {visible && <button disabled>name: fade</button>}
        </Transition>
      </div>
    </div>
  );
};

export default App;
