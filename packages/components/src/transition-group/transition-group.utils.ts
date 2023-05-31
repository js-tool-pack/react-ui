export function applyTranslation(el: HTMLElement, rect: DOMRect): boolean {
  const curRect = el.getBoundingClientRect();
  const x = rect.left - curRect.left;
  const y = rect.top - curRect.top;
  if (x || y) {
    const { style } = el;
    style.transitionDuration = '0s';
    style.transform = style.webkitTransform = `translate(${x}px,${y}px)`;
    return true;
  }
  return false;
}
