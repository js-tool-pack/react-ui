import React from 'react';
import type { PropsBase } from '@pkg/shared';

export interface LoadingProps extends Omit<PropsBase, 'ref'> {
  visible: boolean;
  closeOnClick?: boolean;
  text?: React.ReactNode;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  zIndex?: number;
  mode?: 'insert' | 'wrap';
  onLeave?: () => void;
  onClose?: () => void;
}
