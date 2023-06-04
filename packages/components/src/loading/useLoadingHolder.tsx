import { Loading } from './Loading';
import type { LoadingProps } from './loading.types';
import { useMemo, useState } from 'react';

/**
 * 调用hook开启loading
 *
 * 返回contextHolder给外部挂靠
 *
 * @param props Loading组件的props
 */
export function useLoadingHolder(props: Partial<LoadingProps> = {}) {
  const { visible = true, ...rest } = props;
  // 可以通过外面传入的visible控制显隐
  const [_visible, setVisible] = useState(visible);

  const contextHolder = useMemo(
    () => (
      <Loading visible={_visible} {...rest} onClose={() => setVisible(false)} />
    ),
    [_visible, rest],
  );

  return [
    {
      visible: _visible,
      setVisible,
      toggle: () => setVisible(!_visible),
    },
    contextHolder,
  ] as const;
}
