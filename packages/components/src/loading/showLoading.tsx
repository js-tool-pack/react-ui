import type { LoadingProps } from './loading.types';
import { createRoot, Root } from 'react-dom';
import { Loading } from './Loading';
import React from 'react';

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
  const l: React.ReactElement = (
    <Loading
      closeOnClick={true}
      visible={true}
      {...props}
      onLeave={() => {
        r.unmount();
        root = undefined;
      }}
    />
  );
  r.render(l);
  root = r;
}
