import React from 'react';
import { PropsBase } from '@pkg/shared';

export interface AlertProps extends PropsBase<HTMLDivElement> {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'error';
  bordered?: boolean;
  closable?: boolean;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
