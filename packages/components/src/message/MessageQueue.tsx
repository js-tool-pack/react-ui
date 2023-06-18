import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { TransitionGroup } from '../transition-group';
import { getComponentClass, useForceUpdate } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { Message } from './Message';
import type { MessageProps } from './message.types';

const rootClass = getComponentClass('message-queue');
export const MessageQueue: React.FC<React.HTMLAttributes<HTMLElement>> = (
  props,
) => {
  const { className } = props;

  const forceUpdate = useForceUpdate();

  type Item = Pick<MessageProps, 'type' | 'duration'> & {
    message: string;
    key: number;
  };
  const list = useRef([
    { key: 0, type: 'success', message: 'test1', duration: 2000 },
    { key: 1, type: 'info', message: 'test2', duration: 3000 },
    { key: 2, type: 'danger', message: 'test3', duration: 4000 },
    { key: 3, type: 'warning', message: 'test4', duration: 5000 },
  ] as Array<Item>);
  const id = useRef(list.current.length);

  useEffect(() => {
    const handler = () => {
      list.current.push({
        key: id.current++,
        type: 'success',
        message: 'test1',
        duration: 2000,
      });
      console.log(id.current);
      forceUpdate();
    };
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, [forceUpdate]);

  // todo 现在离开动画堆叠在一起，需要维护一个离开动画队列

  const remove = (item: Item) => {
    const index = list.current.indexOf(item);
    console.log(index);
    list.current.splice(index, 1);
    forceUpdate();
  };

  return createPortal(
    <TransitionGroup
      name={rootClass}
      tag="ul"
      className={getClassNames(rootClass, className)}>
      {list.current.map((it) => (
        <li key={it.key}>
          <Message
            type={it.type}
            duration={it.duration}
            onClick={() => remove(it)}
            onLeave={() => remove(it)}>
            {it.message}
          </Message>
        </li>
      ))}
    </TransitionGroup>,
    document.body,
  );
};
