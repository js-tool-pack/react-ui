import { Loading } from './Loading';
import type { LoadingOptions } from './loading.types';
import { useMemo, useState } from 'react';

/**
 * 调用hook开启loading
 *
 * react不能像vue那样app实例内部还能创建实例，所以要返回contextHolder给外部挂靠
 *
 * @param props Loading组件的props
 */
export function useLoading(props: Partial<LoadingOptions> = {}) {
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
