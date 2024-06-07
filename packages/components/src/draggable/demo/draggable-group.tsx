/**
 * title: 拖拽组
 * description: 拖拽组分为两种拖拽方式，'move' 为移动数据，'copy' 为复制数据，默认为 'move'。
 */

import { DraggableGroup, Draggable, Select } from '@tool-pack/react-ui';
import styles from './draggable-group.module.scss';
import React, { useState } from 'react';

const options = [
  { label: 'move', value: 'move' },
  { label: 'copy', value: 'copy' },
];

const App: React.FC = () => {
  const [type, setType] = useState<'copy' | 'move'>('move');
  const [state, setState] = React.useState<string[]>(['A', 'B', 'C', 'D']);
  const [state2, setState2] = React.useState<string[]>(['a', 'b', 'c', 'd']);
  return (
    <div className={styles['root']}>
      <Select
        attrs={{ style: { display: 'inline-flex' } }}
        onChange={setType}
        options={options}
        value={type}
        size="small"
      />
      <div className="main">
        <DraggableGroup type={type}>
          <Draggable onChange={setState} list={state} key="left">
            {state.map((item) => (
              <div className="draggable-item" key={item}>
                {item}
              </div>
            ))}
          </Draggable>
          <Draggable onChange={setState2} list={state2} key="right">
            {state2.map((item) => (
              <div className="draggable-item" key={item}>
                {item}
              </div>
            ))}
          </Draggable>
        </DraggableGroup>
      </div>
    </div>
  );
};

export default App;
