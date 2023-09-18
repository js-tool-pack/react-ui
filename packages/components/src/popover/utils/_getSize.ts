export interface Size {
  height: number;
  width: number;
}
export function getSize(el: HTMLElement): Size {
  return { height: el.offsetHeight, width: el.offsetWidth };
}
