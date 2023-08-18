import React from 'react';
import type { Placement, PropsBase } from '@pkg/shared';

export interface DrawerProps extends Omit<PropsBase, 'ref'> {
  bodyAttrs?: PropsBase['attrs'];
  visible: boolean;
  header?: React.ReactNode;
  title?: React.ReactNode;
  showClose?: boolean;
  closeIcon?: React.ReactNode;
  onClose?: () => boolean | Promise<void> | void;
  footer?: React.ReactNode;
  onLeave?: () => void;
  zIndex?: number;
  closeOnClickMask?: boolean;
  placement?: Placement;
  destroyOnClose?: boolean | 'mixed';
  size?: React.CSSProperties['width'];
  appendTo?: (() => HTMLElement | null) | null;
  resizeable?: boolean;
  esc?: boolean;
}
