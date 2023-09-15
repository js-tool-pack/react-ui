import { SelectOptionsItem, SelectOption } from '~/select';
import { flattenOptions } from '~/select/utils';
import React from 'react';

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
