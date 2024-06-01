/**
 * title: draggable
 * description: html 元素设置 draggable 为 false 时不可拖动。
 */

import { Draggable } from '@tool-pack/react-ui';
import styles from './draggable.module.scss';
import React from 'react';

const App: React.FC = () => {
  const [state, setState] = React.useState<{ name: string; id: number }[]>([
    { name: 'John', id: 1 },
    { name: 'Joao', id: 2 },
    { name: 'Jean', id: 3 },
    { name: 'Gerard', id: 4 },
  ]);
  return (
    <div className={styles['root']}>
      <div className="main">
        <Draggable onChange={setState} list={state}>
          {state.map((item, index) => (
            <div className="draggable-item" draggable={index > 1} key={item.id}>
              <span>{index + 1}.</span> <span>{item.name}</span>{' '}
              <span>{item.id}</span>
            </div>
          ))}
        </Draggable>
        <div className="data">
          [
          {state.map((it) => (
            <div key={it.id}>{JSON.stringify(it)}</div>
          ))}
          ]
        </div>
      </div>
    </div>
  );
};

export default App;
