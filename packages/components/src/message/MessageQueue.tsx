import {
  TRANSITION_LIFE_CIRCLE,
  type TransitionCB,
  TRANSITION_STATUS,
  Transition,
} from '../transition';
import type {
  MessagePushOptions,
  MessageQueueProps,
  MessageQueueRef,
} from './message.types';
import React, { useImperativeHandle, useCallback, useRef } from 'react';
import { getComponentClass, useForceUpdate } from '@pkg/shared';
import { TransitionGroup } from '../transition-group';
import { getClassNames } from '@tool-pack/basic';
import { createPortal } from 'react-dom';
import LeaveQueue from './LeaveQueue';
import { Message } from './Message';

const rootClass = getComponentClass('message-queue');
export const MessageQueue = React.forwardRef<
  MessageQueueRef,
  MessageQueueProps
>((props, ref) => {
  const { attrs = {} } = props;
  const forceUpdate = useForceUpdate();

  type MsgItem = MessagePushOptions & { key: number };
  const MsgList = useRef<Array<MsgItem>>([]);
  const id = useRef(0);
  useImperativeHandle(ref, () => {
    return {
      clear() {
        if (!MsgList.current.length) return;
        queue.current.push(...MsgList.current);
        forceUpdate();
      },
      push(props) {
        MsgList.current.push({ ...props, key: id.current++ });
        forceUpdate();
      },
    };
  }, []);

  const remove = useCallback((item: MsgItem) => {
    const index = MsgList.current.indexOf(item);
    MsgList.current.splice(index, 1);
    forceUpdate();
  }, []);

  // 需要维护一个离开动画队列,否则离开动画会堆叠在一起，
  const queue = useRef(new LeaveQueue(remove));

  const on: TransitionCB = useCallback((_, status, lifeCircle) => {
    if (
      status === TRANSITION_STATUS.hide &&
      lifeCircle === TRANSITION_LIFE_CIRCLE.after
    ) {
      queue.current.shift();
    }
  }, []);

  return createPortal(
    <TransitionGroup
      {...attrs}
      className={getClassNames(rootClass, attrs.className)}
      name={rootClass}
      tag="ul"
    >
      {MsgList.current.map((it) => {
        const { content, key, ...rest } = it;
        return (
          <Transition key={key} on={on}>
            <li>
              <Message {...rest} onLeave={() => queue.current.push(it)}>
                {content}
              </Message>
            </li>
          </Transition>
        );
      })}
    </TransitionGroup>,
    document.body,
  );
});

MessageQueue.displayName = 'MessageQueue';
