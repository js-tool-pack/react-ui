import type { SelectOptionsItem, SelectOptionGroup } from '../select.types';

export function isGroup(opt: SelectOptionsItem): opt is SelectOptionGroup {
  return (opt as SelectOptionGroup).type === 'group';
}
