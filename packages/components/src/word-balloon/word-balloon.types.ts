import type { Placement_12, PropsBase } from '@pkg/shared';
import React from 'react';

export interface WordBalloonProps extends PropsBase<HTMLDivElement> {
  // 因为是箭头和窗体两个元素共用一个背景，所以抽取出来
  background?: React.CSSProperties['background'];
  contentStyle?: React.CSSProperties;
  arrowStyle?: React.CSSProperties;
  placement?: Placement_12;
  showArrow?: boolean;
}
