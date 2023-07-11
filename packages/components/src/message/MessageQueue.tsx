import React, { useCallback, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import { TransitionGroup, TransitionGroupCB } from '../transition-group';
import { getComponentClass, useForceUpdate } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { Message } from './Message';
import type {
  MessagePushOptions,
  MessageQueueProps,
  MessageQueueRef,
} from './message.types';
import { TRANSITION_STATUS, TRANSITION_LIFE_CIRCLE } from '../transition';
import LeaveQueue from './LeaveQueue';

const rootClass = getComponentClass('message-queue');
export const MessageQueue: React.FC<MessageQueueProps> = React.forwardRef<
  MessageQueueRef,
  MessageQueueProps
>((props, ref) => {
  const { className, ...rest } = props;
  const forceUpdate = useForceUpdate();

  type MsgItem = MessagePushOptions & { key: number };
  const MsgList = useRef<Array<MsgItem>>([]);
  const id = useRef(0);
  useImperativeHandle(
    ref,
    () => {
      return {
        push(props) {
          MsgList.current.push({ ...props, key: id.current++ });
          forceUpdate();
        },
        clear() {
          if (!MsgList.current.length) return;
          queue.current.push(...MsgList.current);
          forceUpdate();
        },
      };
    },
    [],
  );

  const remove = useCallback((item: MsgItem) => {
    const index = MsgList.current.indexOf(item);
    MsgList.current.splice(index, 1);
    forceUpdate();
  }, []);

  // 需要维护一个离开动画队列,否则离开动画会堆叠在一起，
  const queue = useRef(new LeaveQueue(remove));

  const on: TransitionGroupCB = useCallback((_, status, lifeCircle) => {
    if (
      status === TRANSITION_STATUS.hide &&
      lifeCircle === TRANSITION_LIFE_CIRCLE.after
    ) {
      queue.current.shift();
    }
  }, []);

  return createPortal(
    <TransitionGroup
      {...rest}
      on={on}
      name={rootClass}
      tag="ul"
      className={getClassNames(rootClass, className)}>
      {MsgList.current.map((it) => {
        const { key, content, ...rest } = it;
        return (
          <li key={key}>
            <Message {...rest} onLeave={() => queue.current.push(it)}>
              {content}
            </Message>
          </li>
        );
      })}
    </TransitionGroup>,
    document.body,
  );
});