/**
 * title: transition
 * description: 手动搭配 Transition 使用(在 TransitionGroup 内部列表条目也是包裹了 Transition 的)
 */

import {
  transitionCBAdapter,
  TransitionGroup,
  Transition,
  Button,
  Space,
} from '@tool-pack/react-ui';
import React, { useState, useRef } from 'react';
import styles from './list.module.scss';

const App: React.FC = () => {
  const [list, setList] = useState<number[]>([
    ...Array.from({ length: 10 }).keys(),
  ]);

  const index = useRef(list.length);
  function addChild() {
    const splice = list.splice(~~(Math.random() * list.length), list.length);
    list.push(index.current);
    list.push(...splice);
    index.current++;
    setList(list.slice());
  }
  function removeChild(item: number) {
    const index = list.indexOf(item);
    if (index === -1) return;
    list.splice(index, 1);
    setList(list.slice());
  }
  function removeRandomChild() {
    removeChild(list[~~(Math.random() * list.length)]!);
  }

  return (
    <div className={styles['root']}>
      <Space style={{ justifyContent: 'center' }}>
        <Button onClick={addChild} type="primary">
          添加
        </Button>
        <Button onClick={removeRandomChild} type="warning" plain>
          移除
        </Button>
      </Space>
      <br />
      <TransitionGroup className="group-container" tag="section" name="group">
        {list.map((item) => {
          return (
            <Transition
              on={transitionCBAdapter({
                onBeforeEnter() {
                  console.log(item + '正在进来');
                },
                onBeforeLeave() {
                  console.log(item + '正在离去');
                },
                onAfterEnter() {
                  console.log(item + '已进来');
                },
                onAfterLeave() {
                  console.log(item + '已离去');
                },
              })}
              key={item}
            >
              <div>{item}</div>
            </Transition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
