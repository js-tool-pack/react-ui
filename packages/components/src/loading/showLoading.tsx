import { Loading } from './Loading';
import type { LoadingOptions } from './loading.types';
import { createRoot, type Root } from 'react-dom/client';

let root: Root | undefined;

/**
 * 调用函数开启loading，可在任意地方调用
 *
 * @param props Loading组件的props
 */
export function showLoading(
  props: Partial<Omit<LoadingOptions, 'visible' | 'closeOnClick'>> = {},
): void {
  if (root) root.unmount();

  const r = createRoot(document.createElement('div'));
  r.render(
    <Loading
      visible={true}
      closeOnClick={true}
      {...props}
      onLeave={() => {
        r.unmount();
        root = undefined;
      }}
    />,
  );
  root = r;
}
