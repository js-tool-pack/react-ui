import React from 'react';
import { SelectOption, SelectOptionsItem } from '~/select';
import { flattenOptions } from '~/select/utils';

export function pickOptionsByValue(
  options: SelectOptionsItem[],
  value: React.Key[] | React.Key | undefined,
): SelectOption[] {
  if (value === undefined) return [];
  const filter: (option: SelectOption) => boolean = Array.isArray(value)
    ? (opt) => value.includes(opt.value)
    : (opt) => opt.value === value;
  return flattenOptions(options, filter);
}
