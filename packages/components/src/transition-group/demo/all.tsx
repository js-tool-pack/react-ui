/**
 * title: 总览
 * description: 点击列表内的按钮移除元素。
 */

import React, { useCallback, useRef, useState } from 'react';
import { TransitionGroup, Button, Layout } from '@tool-pack/react-ui';

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
      <style>
        {`
         .group-enter-active,
        .group-leave-active,
        .group-move {
          transition: all 1.5s 0s linear;
        }
        .group-leave-active {
          position: absolute;
        }
        .group-enter-from {
          transform: scaleY(0.01) translate(0, -100%);
          opacity: 0;
        }
        .group-leave-to {
          transform: scaleY(0.01) translate(0, 100%);
          opacity: 0;
        }
        .group-container {
          text-align: left;
        }
        .transition-group-demo button {
          user-select: none;
        }
        .transition-group-demo section button {
          display: inline-block;
          width: 60px;
          height: 40px;
        } 
        `}
      </style>
      <br />
      <br />
      <Layout style={{ justifyContent: 'center', gap: '8px' }}>
        <Button type="primary" onClick={addChild}>
          添加
        </Button>
        <Button type="warning" onClick={shuffle}>
          洗牌
        </Button>
      </Layout>
      <br />
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
