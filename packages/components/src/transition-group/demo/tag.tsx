/**
 * title: 标签
 * description: 默认标签为 div，可设置 tag 为其它标签，当 tag 为 null 时，移除包裹元素
 */

import { TransitionGroup, Button, Space } from '@tool-pack/react-ui';
import React, { useCallback, useState, useRef } from 'react';
import styles from './list.module.scss';

const App: React.FC = () => {
  const [, update] = useState({});
  const forceUpdate = useCallback(() => update({}), []);

  const children = useRef<number[]>([...Array.from({ length: 10 }).keys()]);

  const index = useRef(children.current.length);
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
      <div className="group-container">
        <TransitionGroup name="group" tag={null}>
          {children.current.map((item) => {
            return <div key={item}>{item}</div>;
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
