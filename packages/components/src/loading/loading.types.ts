import React from 'react';

export interface LoadingProps {
  visible: boolean;
  closeOnClick?: boolean;
  text?: React.ReactNode;
  icon?: React.ReactNode;
  background?: string;
  color?: string;
  className?: string;
  zIndex?: number;
  mode?: 'insert' | 'wrap';
  children?: React.ReactNode;
  onLeave?: () => void;
  onClose?: () => void;
}
