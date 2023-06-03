import { useEffect, useReducer } from 'react';
import { Transition } from '@pkg/components';

export function TransitionPage() {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);
  useEffect(() => {
    // console.log('uu', visible);
  }, [visible]);

  return (
    <div style={{ textAlign: 'center' }}>
      {/*<button onClick={setVisible}>{visible ? '隐藏' : '显示'}</button>*/}
      <button onClick={setVisible}>切换</button>
      <br />
      <div className="box">
        <Transition name="fade" appear>
          {visible && (
            <div className="fade" key={1}>
              single
            </div>
          )}
        </Transition>
      </div>
      <div className="box">
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
      <div className="box">
        <Transition name="fade" mode="in-out" appear>
          {visible ? (
            <div className="fade" key={1}>
              in-out(in)
            </div>
          ) : (
            <div key={2}>in-out(out)</div>
          )}
        </Transition>
      </div>
      <div className="box">
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
}
