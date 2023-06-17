import React from 'react';

export type DialogProps = React.HTMLAttributes<HTMLElement> & {
  visible?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  closeOnClickMask?: boolean;
  center?: boolean;
  centered?: boolean;
  zIndex?: number;
  esc?: boolean;
};
