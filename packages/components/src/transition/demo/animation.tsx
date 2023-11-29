/**
 * title: animation
 * description: >
 *  使用 animation 动画。
 */

import {
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
  TransitionCB,
  Transition,
  Button,
} from '@tool-pack/react-ui';
import style from './animation.module.scss';
import React, { useReducer } from 'react';
import './base.scss';

const App: React.FC = () => {
  const [visible, setVisible] = useReducer((prevState) => !prevState, true);

  const on: TransitionCB = (el, status, lifeCircle) => {
    console.log(
      el,
      TRANSITION_STATUS[status],
      TRANSITION_LIFE_CIRCLE[lifeCircle],
    );
  };
  return (
    <div style={{ textAlign: 'center' }} className={style['root']}>
      <Button onClick={setVisible} type="primary" shape="round">
        切 换
      </Button>
      <br />
      <br />
      <div className="transition-box">
        <Transition name="ani" on={on}>
          {visible && <button disabled>name: ani</button>}
        </Transition>
      </div>
    </div>
  );
};

export default App;
