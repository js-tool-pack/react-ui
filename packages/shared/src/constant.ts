export const UI_PREFIX = 't';
export const SIZES = ['small', 'medium', 'large'] as const;
export type Size = (typeof SIZES)[number];
export const CLASS_SIZE_SM = `${UI_PREFIX}--size-sm`;
export const CLASS_SIZE_M = `${UI_PREFIX}--size-m`;
export const CLASS_SIZE_LG = `${UI_PREFIX}--size-lg`;
export const Z_INDEX = 1000;
export const PLACEMENTS = ['top', 'right', 'bottom', 'left'] as const;
// 8方位
export const PLACEMENTS_8 = [
  ...PLACEMENTS,
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
] as const;
// 12方位
export const PLACEMENTS_12 = [
  'top-start',
  PLACEMENTS[0],
  'top-end',
  'right-start',
  PLACEMENTS[1],
  'right-end',
  'bottom-start',
  PLACEMENTS[2],
  'bottom-end',
  'left-start',
  PLACEMENTS[3],
  'left-end',
] as const;
