/**
 * title: appear
 * description: 用于设置初始时是否显示动画，只对组件第一次出现时起作用；默认为 false。
 */

import React, { useReducer } from 'react';
import { Button, Transition } from '@tool-pack/react-ui';
import './fade.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  return (
    <div style={{ textAlign: 'center' }}>
      <Button type="primary" shape="round" onClick={setVisible}>
        切 换
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition name="fade" appear>
          {visible && (
            <Button type="success" className="fade" key={1} disabled>
              appear：true
            </Button>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition name="fade">
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
