import { useRef } from 'react';
import { TransitionGroup } from '@pkg/components';
import styles from './transition-group.module.scss';
import { useForceUpdate } from '@pkg/shared';

export function TransitionGroupPage() {
  const children = useRef<number[]>([...Array.from({ length: 30 }).keys()]);
  const forceUpdate = useForceUpdate();

  const index = useRef(children.current.length);
  function addChild() {
    children.current.push(index.current);
    forceUpdate();
    index.current++;
  }
  function removeChild(item: number) {
    const index = children.current.indexOf(item);
    // console.log('vvvvv', index);
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
    // console.log(children.current);
    forceUpdate();
  }

  return (
    <div className={styles['root'] + ' transition-group-page'}>
      <br />
      <br />
      <button onClick={addChild}>添加</button>
      <button onClick={shuffle}>shuffle</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <TransitionGroup name="group" tag="section" className="group-container">
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
}
