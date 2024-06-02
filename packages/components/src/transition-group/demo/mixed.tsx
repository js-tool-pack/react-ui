/**
 * title: 排序过渡加列表过渡
 */

import { TransitionGroup, Button, Space } from '@tool-pack/react-ui';
import React, { useCallback, useState, useRef } from 'react';
import styles from './mixed.module.scss';

const initLen = 5;
const initArr = () => [...Array.from({ length: initLen }).keys()];
const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>(initArr());

  const index = useRef(initLen);
  function addChild() {
    const list = children.current;
    const splice = list.splice(~~(Math.random() * list.length), list.length);
    list.push(index.current);
    list.push(...splice);
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

  function reset() {
    children.current = initArr();
    index.current = initLen;
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
        <Button onClick={reset} type="danger" plain>
          重置
        </Button>
      </Space>
      <br />
      <TransitionGroup className="group-container" tag="section" name="group">
        {children.current.map((item) => {
          return (
            /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
            <div onClick={() => removeChild(item)} key={item}>
              {item}
            </div>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
