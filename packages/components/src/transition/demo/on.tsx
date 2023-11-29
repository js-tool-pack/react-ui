/**
 * title: on回调
 * description: >
 *  监听 Transition 动画事件，点击切换按钮并打开控制台可以看到 log 信息。
 */

import {
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
  TransitionCB,
  Transition,
  Button,
} from '@tool-pack/react-ui';
import React, { useReducer } from 'react';
import './base.scss';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  const on: TransitionCB = (el, status, lifeCircle) => {
    console.log(
      el,
      TRANSITION_STATUS[status],
      TRANSITION_LIFE_CIRCLE[lifeCircle],
    );
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={setVisible} type="primary" shape="round">
        切 换
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition name="fade" on={on}>
          {visible && <button disabled>name: fade</button>}
        </Transition>
      </div>
    </div>
  );
};

export default App;
