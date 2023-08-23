/**
 * title: 超时
 * debug: true
 * description: >
 *  超时清除 className
 */

import React, { useReducer } from 'react';
import { Button, Transition, transitionCBAdapter } from '@tool-pack/react-ui';

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
        <div></div>
        <Transition
          name="fade123"
          show={visible}
          on={transitionCBAdapter({}, false)}>
          <button disabled>name: fade</button>
        </Transition>
      </div>
      <div className="transition-box">
        <div></div>
        <Transition name="fade123" on={transitionCBAdapter({}, true)}>
          {visible && <button disabled>name: fade</button>}
        </Transition>
      </div>
    </div>
  );
};

export default App;
