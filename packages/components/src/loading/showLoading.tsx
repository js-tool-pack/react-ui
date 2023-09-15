import { createRoot, type Root } from 'react-dom/client';
import type { LoadingProps } from './loading.types';
import { Loading } from './Loading';

let root: undefined | Root;

/**
 * 调用函数开启loading，可在任意地方调用
 *
 * @param props Loading组件的props
 */
export function showLoading(
  props: Partial<Omit<LoadingProps, 'closeOnClick' | 'visible'>> = {},
): void {
  if (root) root.unmount();

  const r = createRoot(document.createElement('div'));
  r.render(
    <Loading
      closeOnClick={true}
      visible={true}
      {...props}
      onLeave={() => {
        r.unmount();
        root = undefined;
      }}
    />,
  );
  root = r;
}
