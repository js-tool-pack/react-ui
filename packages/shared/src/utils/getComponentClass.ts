import { UI_PREFIX } from '../constant';

export function getComponentClass(name: string): string {
  return `${UI_PREFIX}-${name}`;
}
