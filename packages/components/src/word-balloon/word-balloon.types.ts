import React from 'react';
import type { Placement_12, PropsBase } from '@pkg/shared';

export interface WordBalloonProps extends PropsBase<HTMLDivElement> {
  placement?: Placement_12;
  contentStyle?: React.CSSProperties;
  arrowStyle?: React.CSSProperties;
  // 因为是箭头和窗体两个元素共用一个背景，所以抽取出来
  background?: React.CSSProperties['background'];
  showArrow?: boolean;
}
