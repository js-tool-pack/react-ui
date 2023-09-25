import type { LoadingProps } from '../loading.types';
import React, { useState, useMemo } from 'react';
import { Loading } from '../Loading';

/**
 * 调用hook开启loading
 *
 * 返回contextHolder给外部挂靠
 *
 * @param props Loading组件的props
 */
export function useLoadingHolder(props: Partial<LoadingProps> = {}): [
  loading: {
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: () => void;
    visible: boolean;
  },
  holder: React.ReactNode,
] {
  const { visible = true, ...rest } = props;
  // 可以通过外面传入的visible控制显隐
  const [_visible, setVisible] = useState(visible);

  const contextHolder = useMemo(
    (): React.ReactNode => (
      <Loading visible={_visible} {...rest} onClose={() => setVisible(false)} />
    ),
    [_visible, rest],
  );

  return [
    {
      toggle: () => setVisible(!_visible),
      visible: _visible,
      setVisible,
    },
    contextHolder,
  ];
}
