import React from 'react';
import type { PropsBase, Size } from '@pkg/shared';

export interface CollapseProps extends PropsBase {
  disabled?: boolean;
  expanded?: boolean;
  header?: (active: boolean) => React.ReactNode;
  title?: React.ReactNode;
  extra?: React.ReactNode;
  icon?: null | ((active: boolean) => React.ReactNode);
  iconPlacement?: 'start' | 'end';
  destroyOnHide?: boolean | 'mixed';
  size?: Size;
  onChange?: (active: boolean) => void;
}

export type CollapseGroupItem = CollapseProps & {
  children: React.ReactNode;
  key: string | number;
};

export interface CollapseGroupProps extends Omit<PropsBase, 'children'> {
  tag?: keyof HTMLElementTagNameMap;
  attrs?: Omit<React.HTMLAttributes<HTMLElement>, 'children'>;
  collapseProps?: Partial<CollapseProps>;
  accordion?: boolean;
  items: CollapseGroupItem[];
  onChange?: (item: CollapseGroupItem, index: number, active: boolean) => void;
}
