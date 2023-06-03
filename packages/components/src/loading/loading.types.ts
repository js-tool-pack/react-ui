import React from 'react';

export interface LoadingOptions {
  visible: boolean;
  closeOnClick?: boolean;
  text?: string | React.ReactElement;
  icon?: React.ReactElement;
  background?: string;
  color?: string;
  className?: string;
  zIndex?: number;
  mode?: 'insert' | 'wrap';
  children?: React.ReactElement;
  onLeave?: () => void;
  onClose?: () => void;
}
