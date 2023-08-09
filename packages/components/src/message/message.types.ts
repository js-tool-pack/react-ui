import React from 'react';
import { PropsBase } from '@pkg/shared';

export interface MessageProps extends PropsBase<HTMLDivElement> {
  type: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
  onLeave?: () => void;
  icon?: React.ReactNode;
  showClose?: boolean;
  hoverKeep?: boolean;
}

export interface MessagePushOptions extends Omit<MessageProps, 'ref'> {
  content: React.ReactNode;
}
export interface MessageQueueRef {
  push(options: MessagePushOptions): void;
  clear(): void;
}
export interface MessageQueueProps
  extends Omit<PropsBase<HTMLDivElement>, 'ref' | 'children'> {
  ref?: React.Ref<MessageQueueRef>;
}
