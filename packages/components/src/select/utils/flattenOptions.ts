import type { SelectOptionsItem, SelectOption } from '../select.types';
import { isDivider } from './isDivider';
import { isGroup } from './isGroup';

export function flattenOptions(
  options: SelectOptionsItem[],
  filter: (option: SelectOption) => boolean = () => true,
): SelectOption[] {
  const result: SelectOption[] = [];
  const queue = options.slice();
  while (queue.length) {
    const opt = queue.shift()!;
    if (isDivider(opt)) continue;
    if (isGroup(opt)) {
      queue.unshift(...(opt.children || []));
      continue;
    }
    if (!filter(opt)) continue;
    result.push(opt);
  }
  return result;
}
