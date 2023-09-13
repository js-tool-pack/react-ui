export function intoView(child: HTMLElement, parent: HTMLElement): void {
  // 底部往顶部走
  if (parent.scrollTop > child.offsetTop) {
    parent.scrollTop = child.offsetTop;
    return;
  }
  // 顶部往底部走
  if (
    parent.scrollTop + parent.offsetHeight <
    child.offsetTop + child.offsetHeight
  ) {
    parent.scrollTop =
      child.offsetTop - parent.offsetHeight + child.offsetHeight;
  }
}
