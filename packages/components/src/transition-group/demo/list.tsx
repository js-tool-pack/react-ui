/**
 * title: 列表过渡
 */

import React, { useCallback, useRef, useState } from 'react';
import { TransitionGroup, Button, Space } from '@tool-pack/react-ui';
import styles from './list.module.scss';

const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>([...Array.from({ length: 10 }).keys()]);

  const index = useRef(children.current.length);
  function addChild() {
    children.current.push(index.current);
    forceUpdate();
    index.current++;
  }
  function removeChild(item: number) {
    const index = children.current.indexOf(item);
    if (index === -1) return;
    children.current.splice(index, 1);
    forceUpdate();
  }
  function removeRandomChild() {
    removeChild(children.current[~~(Math.random() * children.current.length)]!);
  }

  return (
    <div className={styles['root']}>
      <Space style={{ justifyContent: 'center' }}>
        <Button type="primary" onClick={addChild}>
          添加
        </Button>
        <Button type="warning" plain onClick={removeRandomChild}>
          移除
        </Button>
      </Space>
      <br />
      <TransitionGroup name="group" tag="section" className="group-container">
        {children.current.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
