import { useCallback, useEffect, useMemo, useState } from 'react';
import { DialogProps } from './dialog.types';
import { useClientSize } from '@pkg/shared';

export function useShow(visible?: boolean) {
  const [show, setShow] = useState(visible || false);

  useEffect(() => {
    setShow(visible || false);
  }, [visible]);

  const close = useCallback(() => {
    setShow(false);
  }, []);

  return [show, close] as const;
}

export function useTransitionOrigin(props: DialogProps, show: boolean) {
  const { centered, style } = props;

  const [point, setPoint] = useState([0, 0] as [number, number]);
  const clientSize = useClientSize();

  const transformOrigin = useMemo(() => {
    const left = `calc(50% + ${-clientSize[0] / 2 + point[0]}px)`;
    const top = centered
      ? `calc(50% + ${-clientSize[1] / 2 + point[1]}px)`
      : style?.top !== undefined
      ? `calc(${point[1]}px - ${style.top})`
      : `calc(${point[1]}px - 50%)`;
    return `${left} ${top}`;
  }, [clientSize, point, centered, style]);

  useEffect(() => {
    if (show) return;
    const handler = (e: MouseEvent) => {
      setPoint([e.clientX, e.clientY]);
    };
    window.addEventListener('mouseup', handler);
    return () => {
      window.removeEventListener('mouseup', handler);
    };
  }, [show]);

  return transformOrigin;
}
