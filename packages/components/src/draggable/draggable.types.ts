import type { PropsBase } from '@pkg/shared';
import type { ReactElement } from 'react';

export interface DraggableProps<T = unknown> extends PropsBase<HTMLDivElement> {
  tag?: keyof HTMLElementTagNameMap | null;
  onChange?: (list: T[]) => void;
  list: T[];
}
export type DraggableFC = <T>(props: DraggableProps<T>) => ReactElement;
// export interface DraggableLocale {}
