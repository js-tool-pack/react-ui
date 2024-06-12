import { RequiredPart } from '@tool-pack/types';
import { defaults } from '@tool-pack/basic';

/**
 * 用于代替 react 的 defaultProps 合并功能
 */
export function mergeReactDefaultProps<const T, const P>(
  props: T,
  defaultProps: P,
): keyof P extends keyof T ? RequiredPart<T, keyof P> : T & P {
  return defaults({ ...props }, defaultProps) as any;
}
