import React from 'react';
interface Root {
  render(children: React.ReactNode): void;
  unmount(): void;
}
interface RootOptions {
  identifierPrefix?: string;
  onRecoverableError?: (error: unknown, errorInfo: ErrorInfo) => void;
}

interface ErrorInfo {
  digest?: string;
  componentStack?: string;
}

interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS {}

type Container =
  | Element
  | DocumentFragment
  | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_CREATE_ROOT_CONTAINERS];

declare module 'react-dom' {
  // 原定义是在 react-dom/client 里面的，但实际在 react-dom 就有 createRoot，且 client.js 有用 nodejs 无法跳过，只能覆盖定义了
  export function createRoot(container: Container, options?: RootOptions): Root;
  export type Root = Root;
}
