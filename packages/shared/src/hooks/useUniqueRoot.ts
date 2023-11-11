import React, { useEffect, useRef } from 'react';

/**
 * 用于给类似于 loading、message 这种需要 createPortal 的组件创建公共容器
 * @param rootId
 */
export function useUniqueRoot(
  rootId: string,
): React.MutableRefObject<HTMLDivElement | undefined> {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => removeRoot, []);

  if (ref.current) return ref;
  ref.current = findRoot() || createRoot();
  return ref;

  function findRoot(): HTMLDivElement | null {
    return document.querySelector<HTMLDivElement>('#' + rootId);
  }
  function createRoot(): HTMLDivElement {
    const root = document.createElement('div');
    root.id = rootId;
    document.body.appendChild(root);
    return root;
  }
  function removeRoot(): void {
    const root = ref.current;
    if (!root) return;
    root.remove();
  }
}
