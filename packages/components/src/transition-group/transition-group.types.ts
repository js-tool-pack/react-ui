import type { TransitionProps } from '~/transition';
import type { ReactElement, Key } from 'react';
import type { PropsBase } from '@pkg/shared';

export interface TransitionGroupProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'>,
    Pick<TransitionProps, 'name'> {
  tag?: keyof HTMLElementTagNameMap | null;
  children?: ReactElement[];
  className?: string;
}

export type ChildMapValue = {
  ref: HTMLElement | null;
  reactEl: ReactElement;
};
export type ChildMap = Map<Key, ChildMapValue>;
