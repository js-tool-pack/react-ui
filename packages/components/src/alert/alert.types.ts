import type { PropsBase } from '@pkg/shared';
import React from 'react';

export interface AlertProps extends PropsBase<HTMLDivElement> {
  type?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  bordered?: boolean;
  closable?: boolean;
}
