import type { PropsBase, Size } from '@pkg/shared';
import React from 'react';

export interface CollapseProps extends PropsBase {
  icon?: ((active: boolean) => React.ReactNode) | null;
  header?: (active: boolean) => React.ReactNode;
  onChange?: (active: boolean) => void;
  destroyOnHide?: boolean | 'mixed';
  iconPlacement?: 'start' | 'end';
  title?: React.ReactNode;
  extra?: React.ReactNode;
  disabled?: boolean;
  expanded?: boolean;
  size?: Size;
}

export type CollapseGroupItem = CollapseProps & {
  children: React.ReactNode;
  key: string | number;
};

export interface CollapseGroupProps extends Omit<PropsBase, 'children'> {
  onChange?: (item: CollapseGroupItem, index: number, active: boolean) => void;
  attrs?: Omit<React.HTMLAttributes<HTMLElement>, 'children'>;
  collapseProps?: Partial<CollapseProps>;
  tag?: keyof HTMLElementTagNameMap;
  items: CollapseGroupItem[];
  accordion?: boolean;
}
