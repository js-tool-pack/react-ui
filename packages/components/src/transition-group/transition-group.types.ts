import type React from 'react';
import type { TransitionProps } from '~/transition';
import type { PropsBase } from '@pkg/shared';

export interface TransitionGroupProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'>,
    Pick<TransitionProps, 'name'> {
  className?: string;
  children?: React.ReactElement[];
  tag?: keyof HTMLElementTagNameMap;
}

export type ChildMap = Map<React.Key, React.ReactNode>;
