import React from 'react';

export type DrawerProps = React.HTMLAttributes<HTMLElement> & {
  name?: string;
  reference?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  center?: boolean;
  visible?: boolean;
  onClose?: () => void;
  zIndex?: number;
  closeOnClickMask?: boolean;
  placement?: 'top' | 'bottom' | 'left' | 'right';
};
