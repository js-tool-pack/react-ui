import type React from 'react';
import type { TransitionProps } from '../transition/transition.types';

export type TransitionGroupProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'children'
> &
  Pick<TransitionProps, 'name'> & {
    children?: React.ReactElement[];
    tag?: keyof HTMLElementTagNameMap;
  };

export type ChildMap = Map<React.Key, React.ReactNode>;
