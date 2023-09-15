export const $ = <T extends HTMLElement = HTMLElement>(
  selectors: string,
): null | T => document.querySelector<T>(selectors);
export const $$ = (selectors: string) => document.querySelectorAll(selectors);

export function getBalloon() {
  return $('.t-word-balloon') as HTMLDivElement;
}
export function getFilterInput() {
  return $('.t-select-filter__input') as HTMLInputElement;
}
