/**
 * title: mode
 * description: >
 *  当有多个子元素切换时，需要为子元素添加key，且可以添加mode指定进入退出顺序；<br />
 *  mode有 `out-in` `in-out` `default` 三种选项，分别是`先出后进`、`先进后出`、`同进同出`三种状态。
 */

import React, { useReducer } from 'react';
import { Button, Transition } from '@tool-pack/react-ui';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  return (
    <div style={{ textAlign: 'center' }}>
      <style>
        {`
          /* 为方便演示，所以把css写在此，真实项目的css不应该放这里 */
          .mode-enter-active,
          .mode-leave-active {
            transition: all 1.5s 0s linear;
          }
          .mode-enter-from {
            transform: translateX(-100%);
            opacity: 0;
          }
          .mode-leave-to {
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
        <Transition name="mode" mode="out-in">
          {visible ? (
            <div className="mode" key={1}>
              out-in(out)
            </div>
          ) : (
            <div key={2}>out-in(in)</div>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition name="mode" mode="in-out">
          {visible ? (
            <div className="mode" key={1}>
              in-out(in)
            </div>
          ) : (
            <div key={2}>in-out(out)</div>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition name="mode" mode="default">
          {visible ? (
            <div className="mode" key={1}>
              default(out)
            </div>
          ) : (
            <div key={2}>default(in)</div>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default App;
