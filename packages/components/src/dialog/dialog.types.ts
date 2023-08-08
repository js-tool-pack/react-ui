import React from 'react';
import { PropsBase } from '@pkg/shared';

export interface DialogProps extends Omit<PropsBase, 'ref'> {
  bodyAttrs?: PropsBase['attrs'];
  visible?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  closeOnClickMask?: boolean;
  center?: boolean;
  centered?: boolean;
  zIndex?: number;
  esc?: boolean;
}
