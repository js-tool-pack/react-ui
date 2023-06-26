/**
 * title: on回调
 * description: >
 *  监听 Transition 动画事件，点击切换按钮并打开控制台可以看到 log 信息。
 */

import React, { useReducer } from 'react';
import {
  Button,
  Transition,
  TransitionCB,
  TRANSITION_STATUS,
  TRANSITION_LIFE_CIRCLE,
} from '@tool-pack/react-ui';
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
      <Button type="primary" shape="round" onClick={setVisible}>
        切 换
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition name="fade" on={on}>
          {visible && (
            <Button type="warning" disabled>
              name: fade
            </Button>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default App;
