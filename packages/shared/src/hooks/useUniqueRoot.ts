import { useEffect } from 'react';

/**
 * 用于给类似于 loading、message 这种需要 createPortal 的组件创建公共容器
 * @param rootId
 */
export function useUniqueRoot(rootId: string): HTMLDivElement {
  useEffect(() => {
    addCount();
    return removeRoot;
  }, []);

  let root = rootMap[rootId];
  if (root) return root.dom;

  root = addRoot();
  return root.dom;

  function findRoot(): HTMLDivElement | null {
    return document.querySelector<HTMLDivElement>('#' + rootId);
  }
  function createRoot(): HTMLDivElement {
    const root = document.createElement('div');
    root.id = rootId;
    document.body.appendChild(root);
    return root;
  }
  function addRoot() {
    const value = { dom: findRoot() || createRoot(), count: 0 };
    rootMap[rootId] = value;
    return value;
  }
  function removeRoot(): void {
    const root = rootMap[rootId];
    if (!root) return;
    const { dom } = root;
    root.count--;
    if (root.count <= 0) {
      dom.remove();
      delete rootMap[rootId];
    }
  }
  function addCount(): void {
    const root = rootMap[rootId] || addRoot();
    if (!root) return;
    root.count++;
  }
}

const rootMap: Record<string, { dom: HTMLDivElement; count: number }> = {};
