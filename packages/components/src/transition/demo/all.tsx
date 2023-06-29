/**
 * title: 总览
 * description: 演示。
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
        <Transition name="fade">
          {visible && (
            <Button type="warning" className="fade" key={1} disabled>
              single
            </Button>
          )}
        </Transition>
      </div>
      <div className="transition-box">
        <Transition name="fade" mode="out-in">
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
        <Transition name="fade" mode="in-out">
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
        <Transition name="fade" mode="default">
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
