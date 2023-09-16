import React from 'react';

export function isSameReactEl(prev: unknown, next: unknown): boolean {
  if (!React.isValidElement(next)) return false;
  if (prev === next) return true;
  if (!React.isValidElement(prev)) return false;
  return prev.type === next.type && prev.key !== null && prev.key === next.key;
}
