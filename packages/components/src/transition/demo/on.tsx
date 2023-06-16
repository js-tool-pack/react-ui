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
      <style>
        {`
        /* 为方便演示，所以把css写在此，真实项目的css不应该放这里 */
        .on-enter-active,
        .on-leave-active {
          transition: all 1.5s 0s linear;
        }
        .on-enter-from {
          transform: translateX(-100%);
          opacity: 0;
        }
        .on-leave-to {
          transform: translateX(100%);
          opacity: 0;
        }
        `}
      </style>
      <Button type="primary" shape="round" onClick={setVisible}>
        切 换
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition name="on" on={on}>
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
