/**
 * title: 回调适配器
 * description: 使用 transitionCBAdapter 回调适配器就可以像 vue 官方的那样用 onBeforeEnter...等回调, 不需要再手动判断。
 *   <br /> **第二个参数为 true 时会打印动画状态方便调试。**
 */

import { transitionCBAdapter, Transition, Button } from '@tool-pack/react-ui';
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
        <Transition
          on={transitionCBAdapter(
            {
              onAfterEnter: (el) => console.log('onAfterEnter', el),
              onAfterLeave: (el) => console.log('onAfterLeave', el),
            },
            true,
          )}
          name="fade"
        >
          {visible && <button disabled>name: fade</button>}
        </Transition>
      </div>
    </div>
  );
};

export default App;
