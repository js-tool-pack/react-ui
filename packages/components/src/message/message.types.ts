import { PropsBase } from '@pkg/shared';
import React from 'react';

export interface MessageProps extends PropsBase<HTMLDivElement> {
  type: 'success' | 'warning' | 'error' | 'info';
  icon?: React.ReactNode;
  onLeave?: () => void;
  showClose?: boolean;
  hoverKeep?: boolean;
  duration?: number;
}

export interface MessagePushOptions extends Omit<MessageProps, 'ref'> {
  content: React.ReactNode;
}
export interface MessageQueueRef {
  push(options: MessagePushOptions): void;
  clear(): void;
}
export interface MessageQueueProps
  extends Omit<PropsBase<HTMLDivElement>, 'children' | 'ref'> {
  ref?: React.Ref<MessageQueueRef>;
}
