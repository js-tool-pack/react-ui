/**
 * title: 总览
 * description: 演示。
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
          {visible && (
            <button className="fade" disabled key={1}>
              single
            </button>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition mode="out-in" name="fade">
          {visible ? (
            <div className="fade" key={1}>
              out-in(out)
            </div>
          ) : (
            <div key={2}>out-in(in)</div>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition mode="in-out" name="fade">
          {visible ? (
            <div className="fade" key={1}>
              in-out(in)
            </div>
          ) : (
            <div key={2}>in-out(out)</div>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition mode="default" name="fade">
          {visible ? (
            <div className="fade" key={1}>
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
