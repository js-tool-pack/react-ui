/**
 * title: 超时
 * debug: true
 * description: >
 *  超时清除 className
 */

import { transitionCBAdapter, Transition, Button } from '@tool-pack/react-ui';
import React, { useReducer } from 'react';

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
        <div></div>
        <Transition
          on={transitionCBAdapter({}, false)}
          name="fade123"
          show={visible}
        >
          <button disabled>name: fade</button>
        </Transition>
      </div>
      <div className="transition-box">
        <div></div>
        <Transition on={transitionCBAdapter({}, true)} name="fade123">
          {visible && <button disabled>name: fade</button>}
        </Transition>
      </div>
    </div>
  );
};

export default App;
