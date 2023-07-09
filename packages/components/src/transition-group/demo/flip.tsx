/**
 * title: 多维表格排序过渡
 */

import React, { useCallback, useRef, useState } from 'react';
import { TransitionGroup, Button, Space } from '@tool-pack/react-ui';
import styles from './flip.module.scss';

const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>([...Array.from({ length: 30 }).keys()]);

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
      <Space style={{ justifyContent: 'center' }}>
        <Button type="primary" plain onClick={shuffle}>
          洗牌
        </Button>
      </Space>
      <br />
      <TransitionGroup name="group" tag="section" className="group-container">
        {children.current.map((item) => {
          return <button key={item}>{item}</button>;
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
