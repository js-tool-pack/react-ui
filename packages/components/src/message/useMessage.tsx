import type { MessagePushOptions, MessageQueueRef } from './message.types';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import type { PartialPart } from '@tool-pack/types';
import { MessageQueue } from './MessageQueue';
import { createRoot } from 'react-dom/client';
import { nextTick } from '@tool-pack/basic';

type Res = readonly [
  {
    open(
      content: MessagePushOptions['content'],
      options?: PartialPart<Omit<MessagePushOptions, 'content'>, 'type'>,
    ): void;
    clear(): void;
  } & Record<
    MessagePushOptions['type'],
    (
      content: MessagePushOptions['content'],
      options?: Omit<MessagePushOptions, 'content' | 'type'>,
    ) => void
  >,
  React.ReactElement,
];

/**
 * @param commonOptions 可以填入公共的duration、icon、showClose参数
 */
export function useMessageHolder(
  commonOptions: Omit<MessagePushOptions, 'content' | 'type'> & {
    containerAttrs?: MessagePushOptions['attrs'];
  } = {},
): Res {
  const { containerAttrs, ...restOptions } = commonOptions;
  const ref = useRef<MessageQueueRef>(null);
  const holder = useMemo(
    () => <MessageQueue attrs={containerAttrs} ref={ref} />,
    [containerAttrs],
  );

  const push = useCallback(
    (
      type: MessagePushOptions['type'],
      content: MessagePushOptions['content'],
      options?: Omit<MessagePushOptions, 'content' | 'type'>,
    ) => {
      ref.current?.push({
        ...restOptions,
        ...options,
        content,
        type,
      });
    },
    [],
  );

  return [
    {
      open: useCallback((c, o = {}) => push(o.type || 'info', c, o), []),
      success: useCallback((...args) => push('success', ...args), []),
      warning: useCallback((...args) => push('warning', ...args), []),
      error: useCallback((...args) => push('error', ...args), []),
      info: useCallback((...args) => push('info', ...args), []),
      clear: useCallback(() => ref.current?.clear(), []),
    },
    holder,
  ];
}

/**
 * @param options 可以填入公共的duration、icon、showClose参数
 */
export function useMessage(options?: Parameters<typeof useMessageHolder>[0]) {
  const [Message, holder] = useMessageHolder(options);

  useEffect(() => {
    const r = createRoot(document.createElement('div'));
    r.render(holder);
    return () => nextTick(() => r.unmount());
  }, []);

  return Message;
}
