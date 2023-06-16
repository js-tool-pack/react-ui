/**
 * title: appear
 * description: 用于设置初始时是否显示动画，只对组件第一次出现时起作用；默认为 false。
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
        .appear-enter-active,
        .appear-leave-active {
          transition: all 1.5s 0s linear;
        }
        .appear-enter-from {
          transform: translateX(-100%);
          opacity: 0;
        }
        .appear-leave-to {
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
        <Transition name="appear" appear>
          {visible && (
            <Button type="success" className="fade" key={1} disabled>
              appear：true
            </Button>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition name="appear">
          {visible && (
            <Button type="info" className="fade" key={2} disabled>
              appear：false
            </Button>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default App;
