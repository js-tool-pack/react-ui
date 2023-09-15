import { useEffect, useState, useMemo } from 'react';
import { DialogProps } from './dialog.types';
import { useClientSize } from '@pkg/shared';

export function useTransitionOrigin(props: DialogProps, show?: boolean) {
  const { bodyAttrs = {}, centered } = props;

  const [point, setPoint] = useState([0, 0] as [number, number]);
  const clientSize = useClientSize();

  const transformOrigin = useMemo(() => {
    const left = `calc(50% + ${-clientSize[0] / 2 + point[0]}px)`;
    const styleTop = bodyAttrs.style?.top;
    const top = centered
      ? `calc(50% + (${-clientSize[1] / 2 + point[1]}px - ${styleTop || 0}))`
      : styleTop !== undefined
      ? `calc(${point[1]}px - ${styleTop})`
      : `calc(${point[1]}px - 50%)`;
    return `${left} ${top}`;
  }, [clientSize, point, centered, bodyAttrs]);

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

export function useEsc(
  show: boolean | void,
  esc: boolean,
  handler: () => void,
) {
  useEffect(() => {
    if (!show || !esc) return;
    const _handler = (e: KeyboardEvent) => e.key === 'Escape' && handler();
    window.addEventListener('keydown', _handler);
    return () => window.removeEventListener('keydown', _handler);
  }, [show, esc]);
}
