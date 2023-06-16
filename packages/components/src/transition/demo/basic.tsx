/**
 * title: 基础用法
 * description: >
 *  需要有一个name作为元素的className前缀，然后添加相应的css样式。
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
        .fade1-enter-active,
        .fade1-leave-active {
          transition: all 1.5s 0s linear;
        }
        .fade1-enter-from {
          transform: translateX(-100%);
          opacity: 0;
        }
        .fade1-leave-to {
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
        <Transition name="fade1">
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
