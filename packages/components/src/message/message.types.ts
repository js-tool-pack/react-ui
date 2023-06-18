import React from 'react';

export type MessageProps = React.HTMLAttributes<HTMLDivElement> & {
  type: 'success' | 'info' | 'warning' | 'danger';
  duration?: number;
  ref?: React.Ref<HTMLDivElement>;
  onLeave?: () => void;
};
