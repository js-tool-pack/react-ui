import { PropsBase } from '@pkg/shared';
import React from 'react';

export interface DialogProps extends Omit<PropsBase, 'ref'> {
  bodyAttrs?: PropsBase['attrs'];
  closeOnClickMask?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
  centered?: boolean;
  visible?: boolean;
  center?: boolean;
  zIndex?: number;
  esc?: boolean;
}
