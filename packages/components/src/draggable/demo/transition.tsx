/**
 * title: transition
 * description: 开启 transition 动画。
 */

import { ButtonGroup, Draggable, Button } from '@tool-pack/react-ui';
import styles from './transition.module.scss';
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
      <ButtonGroup>
        <Button
          onClick={() => {
            const id = state.length + 1;
            setState([...state, { name: 'anyone', id }]);
          }}
          type="primary"
        >
          添加
        </Button>
        <Button onClick={() => setState(state.slice(0, -1))} type="success">
          删减
        </Button>
      </ButtonGroup>
      <div className="main">
        <Draggable onChange={setState} list={state} transition>
          {state.map((item, index) => (
            <div className="draggable-item" key={item.id}>
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
