import { TooltipProps } from '~/tooltip';
import { PropsBase } from '@pkg/shared';
import React from 'react';

export type SliderMarks = Record<
  number,
  { label: React.ReactNode; reverse?: boolean }
>;

export interface SliderStaticProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'> {
  formatter?: (value: number) => React.ReactNode;
  tooltipProps?: Partial<TooltipProps>;
  onChange?: (value: any) => void;
  tooltip?: 'always' | boolean;
  keepRangeSorted?: boolean;
  value?: number[] | number;
  step?: number | 'mark';
  marks?: SliderMarks;
  vertical?: boolean;
  disabled?: boolean;
  reverse?: boolean;
  min?: number;
  max?: number;
}

export interface SliderProps<V extends number[] | number>
  extends SliderStaticProps {
  onChange?: (value: V) => void;
  value?: V;
}

export type SliderFC = <V extends number[] | number>(
  props: SliderProps<V>,
) => React.ReactElement;
