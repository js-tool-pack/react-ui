import type { PropsBase } from '@pkg/shared';
import React from 'react';

export interface LoadingProps extends Omit<PropsBase, 'ref'> {
  wrapperAttrs?: React.HTMLAttributes<HTMLElement>;
  mode?: 'insert' | 'wrap';
  closeOnClick?: boolean;
  text?: React.ReactNode;
  icon?: React.ReactNode;
  onLeave?: () => void;
  onClose?: () => void;
  background?: string;
  visible: boolean;
  zIndex?: number;
  color?: string;
}
