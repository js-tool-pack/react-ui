/**
 * title: 排序过渡
 */

import { TransitionGroup, Transition, Button } from '@tool-pack/react-ui';
import React, { useCallback, useState, useRef } from 'react';
import styles from './shuffle.module.scss';

const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>([...Array.from({ length: 20 }).keys()]);
  function shuffle() {
    const list = children.current;
    const len = list.length;
    for (let i = 0; i < len; i++) {
      const j = ~~(Math.random() * len);
      [list[i] as unknown, list[j] as unknown] = [list[j], list[i]];
    }
    forceUpdate();
  }

  return (
    <div className={styles['root']}>
      <Button onClick={shuffle} type="primary" plain>
        洗牌
      </Button>
      <br />
      <TransitionGroup className="group-container" tag="section" name="group">
        {children.current.map((item) => {
          return (
            <Transition key={item}>
              <div>{item}</div>
            </Transition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
