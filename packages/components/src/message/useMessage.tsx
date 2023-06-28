import { useCallback, useEffect, useMemo, useRef } from 'react';
import type { MessagePushOptions, MessageQueueRef } from './message.types';
import { MessageQueue } from './MessageQueue';
import { createRoot } from 'react-dom/client';
import { nextTick } from '@tool-pack/basic';
import type { PartialPart } from '@tool-pack/types';

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
      options?: Omit<MessagePushOptions, 'type' | 'content'>,
    ) => void
  >,
  React.ReactElement,
];

/**
 * @param commonOptions 可以填入公共的duration、icon、showClose参数
 */
export function useMessageHolder(
  commonOptions: Pick<
    MessagePushOptions,
    'duration' | 'icon' | 'showClose' | 'hoverKeep' | 'className'
  > & { containerClassName?: string } = {},
): Res {
  const { containerClassName, ...restOptions } = commonOptions;
  const ref = useRef<MessageQueueRef>(null);
  const holder = useMemo(
    () => <MessageQueue className={containerClassName} ref={ref} />,
    [containerClassName],
  );

  const push = useCallback(
    (
      type: MessagePushOptions['type'],
      content: MessagePushOptions['content'],
      options?: Omit<MessagePushOptions, 'type' | 'content'>,
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
      clear: useCallback(() => ref.current?.clear(), []),
      open: useCallback((c, o = {}) => push(o.type || 'info', c, o), []),
      success: useCallback((...args) => push('success', ...args), []),
      info: useCallback((...args) => push('info', ...args), []),
      warning: useCallback((...args) => push('warning', ...args), []),
      error: useCallback((...args) => push('error', ...args), []),
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
