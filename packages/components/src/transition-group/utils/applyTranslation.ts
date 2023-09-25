export function applyTranslation(
  el: HTMLElement,
  prevRect: DOMRect,
  nextRect: DOMRect,
): boolean {
  const x = prevRect.left - nextRect.left + (prevRect.width - nextRect.width);
  const y = prevRect.top - nextRect.top + (prevRect.height - nextRect.height);
  if (x || y) {
    const { style } = el;
    style.transform = style.webkitTransform = `translate(${x}px,${y}px)`;
    style.transitionDuration = '0s';
    return true;
  }
  return false;
}
