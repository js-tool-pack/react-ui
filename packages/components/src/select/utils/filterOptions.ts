import type { SelectOption, SelectOptionsItem } from '../select.types';
import { isString } from '@tool-pack/basic';
import { isDivider } from './isDivider';
import { isGroup } from './isGroup';

export function filterOptions(
  options: SelectOptionsItem[],
  pattern: string,
  filter = filterLabel,
): SelectOptionsItem[] {
  const result: SelectOptionsItem[] = [];
  options.forEach((opt) => {
    if (isDivider(opt)) return;
    if (isGroup(opt)) {
      if (!opt.children?.length) return;
      const children = filterOptions(opt.children, pattern, filter);
      if (!children.length) return;
      result.push({ ...opt, children });
      return;
    }
    if (filter(pattern, opt)) result.push(opt);
  });
  return result;
}

function filterLabel(pattern: string, option: SelectOption): boolean {
  return isString(option.label) && option.label.includes(pattern);
}
