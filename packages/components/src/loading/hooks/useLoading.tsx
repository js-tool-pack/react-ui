import type { LoadingProps } from '../loading.types';
import { createRoot } from 'react-dom/client';
import { Loading } from '../Loading';
import React from 'react';

/**
 * 调用hook开启loading，无需挂靠render
 *
 * @param props Loading组件的props
 */
export function useLoading(props: Partial<LoadingProps> = {}): {
  setVisible: (value: boolean) => void;
  toggle: () => void;
  visible: boolean;
} {
  const { visible = true, ...rest } = props;
  // 可以通过外面传入的visible控制显隐
  const [_visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (_visible) {
      const r = createRoot(document.createElement('div'));
      r.render(
        <Loading
          visible={_visible}
          {...rest}
          onClose={() => {
            setVisible(false);
          }}
          onLeave={() => {
            r.unmount();
          }}
        />,
      );
      // root = r;
    }
  }, [_visible]);

  React.useEffect(() => {
    setVisible(visible);
  }, [visible]);

  return {
    toggle: () => setVisible(!_visible),
    visible: _visible,
    setVisible,
  };
}
