/**
 * title: 总览
 * description: 点击列表内的按钮移除元素。
 */

import React, { useCallback, useRef, useState } from 'react';
import { TransitionGroup, Button, Space } from '@tool-pack/react-ui';
import './all.scss';

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
    <div className="transition-group-demo">
      <Space style={{ justifyContent: 'center' }}>
        <Button type="primary" onClick={addChild}>
          添加
        </Button>
        <Button type="primary" plain onClick={shuffle}>
          洗牌
        </Button>
      </Space>
      <br />
      <TransitionGroup
        name="group"
        tag="section"
        className="group-container"
        style={{ background: 'gray' }}>
        {children.current.map((item) => {
          return (
            <button key={item} onClick={() => removeChild(item)}>
              {item}
            </button>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default App;
