import { CLASS_SIZE_LG, CLASS_SIZE_SM, CLASS_SIZE_M } from '../constant';
import type { Size } from '../types';

export function getSizeClassName(size: Size): string {
  const map: Record<Size, string> = {
    small: CLASS_SIZE_SM,
    medium: CLASS_SIZE_M,
    large: CLASS_SIZE_LG,
  };
  return map[size];
}
