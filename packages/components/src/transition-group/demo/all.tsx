/**
 * title: 总览
 * debug: true
 * description: 点击列表内的按钮移除元素。
 */

import {
  TransitionGroup,
  Transition,
  Button,
  Space,
} from '@tool-pack/react-ui';
import React, { useCallback, useState, useRef } from 'react';
import styles from './all.module.scss';

const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>([...Array.from({ length: 30 }).keys()]);

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
        <Button onClick={addChild} type="primary">
          添加
        </Button>
        <Button onClick={shuffle} type="primary" plain>
          洗牌
        </Button>
        <Button onClick={removeRandomChild} type="warning" plain>
          移除
        </Button>
      </Space>
      <br />
      <TransitionGroup className="group-container" tag="section" name="group">
        {children.current.map((item) => {
          return (
            <Transition key={item}>
              <button onClick={() => removeChild(item)}>{item}</button>
            </Transition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
