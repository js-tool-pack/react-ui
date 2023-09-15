import { SelectOption } from '~/select';
import React from 'react';

export function isValueChanged(
  value: React.Key[] | React.Key | undefined,
  selectedOptions: SelectOption[],
): boolean {
  if (value === undefined) return false;
  if (!Array.isArray(value))
    return selectedOptions.length !== 1 || selectedOptions[0]?.value !== value;
  if (value.length !== selectedOptions.length) return true;
  return selectedOptions.some((v, i) => value[i] !== v.value);
}
