export function getElRealSize(
  el: HTMLElement,
): readonly [width: number, height: number] {
  const style = getComputedStyle(el);
  if (style.display === 'inline') return [el.offsetWidth, el.offsetHeight];
  return [parseFloat(style.width), parseFloat(style.height)];
}
