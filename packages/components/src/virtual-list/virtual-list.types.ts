import { PropsBase } from '@pkg/shared';

export interface VirtualListProps extends PropsBase<HTMLElement> {
  tag?: keyof HTMLElementTagNameMap;
}
