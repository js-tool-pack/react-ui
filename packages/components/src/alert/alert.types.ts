import React from 'react';

export interface AlertProps {
  attrs?: Partial<React.HTMLAttributes<HTMLElement>>;
  children?: React.ReactNode;
  ref?: React.ForwardedRef<HTMLElement>;

  type?: 'default' | 'success' | 'info' | 'warning' | 'error';
  bordered?: boolean;
  closable?: boolean;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  onClose?: () => void;
}
