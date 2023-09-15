import type { TransitionProps } from '~/transition';
import type { PropsBase } from '@pkg/shared';
import type React from 'react';

export interface TransitionGroupProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'>,
    Pick<TransitionProps, 'name'> {
  tag?: keyof HTMLElementTagNameMap;
  children?: React.ReactElement[];
  className?: string;
}

export type ChildMap = Map<React.Key, React.ReactNode>;
