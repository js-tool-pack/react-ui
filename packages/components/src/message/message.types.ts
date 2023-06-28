import React from 'react';

export type MessageProps = React.HTMLAttributes<HTMLDivElement> & {
  type: 'success' | 'info' | 'warning' | 'error';
  duration?: number;
  ref?: React.Ref<HTMLDivElement>;
  onLeave?: () => void;
  icon?: React.ReactNode;
  showClose?: boolean;
  hoverKeep?: boolean;
};

export type MessagePushOptions = Pick<
  MessageProps,
  'type' | 'duration' | 'icon' | 'showClose' | 'hoverKeep' | 'className'
> & {
  content: React.ReactNode;
};
export type MessageQueueRef = {
  push(options: MessagePushOptions): void;
  clear(): void;
};
export type MessageQueueProps = React.HTMLAttributes<HTMLElement> & {
  ref?: React.Ref<MessageQueueRef>;
};
