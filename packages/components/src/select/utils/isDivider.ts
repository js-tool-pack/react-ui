import type { SelectOptionsItem, SelectDivider } from '../select.types';

export function isDivider(opt: SelectOptionsItem): opt is SelectDivider {
  return (opt as SelectDivider).type === 'divider';
}
