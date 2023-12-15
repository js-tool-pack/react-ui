import { TYPE_LEVEL, PropsBase } from '@pkg/shared';
import React from 'react';

export interface TimelineItemProps {
  lineType?: React.CSSProperties['borderInlineEndStyle'];
  content?: React.ReactNode;
  title?: React.ReactNode;
  icon?: React.ReactNode;
  type?: TYPE_LEVEL;
  time?: string;
}
export interface TimelineProps extends PropsBase<HTMLDivElement> {
  placement?: 'alternate' | 'right' | 'left';
  items?: TimelineItemProps[];
  reverse?: boolean;
}
