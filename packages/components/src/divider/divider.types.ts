import React from 'react';

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  lineStyle?: React.CSSProperties['borderStyle'];
  lineColor?: React.CSSProperties['borderColor'];
  lineWidth?: React.CSSProperties['borderWidth'];
  placement?: 'left' | 'center' | 'right';
  vertical?: boolean;
};
