import React, { useEffect } from 'react';
import type { ResizerProps } from './resizer.types';
import { getComponentClass, getElRealSize, useForwardRef } from '@pkg/shared';
import { onDragEvent } from '@tool-pack/dom';
import { getClassNames } from '@tool-pack/basic';
import type { RequiredPart } from '@tool-pack/types';

const rootName = getComponentClass('resizer');

const defaultProps = {
  placement: 'bottom',
  min: 0,
  max: Number.MAX_SAFE_INTEGER,
} satisfies Partial<ResizerProps>;

export const Resizer: React.FC<ResizerProps> = React.forwardRef<
  HTMLDivElement,
  ResizerProps
>((props, _ref) => {
  const {
    placement,
    min,
    max,
    attrs = {},
  } = props as RequiredPart<ResizerProps, keyof typeof defaultProps>;
  const ref = useForwardRef(_ref);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    return onDragEvent(
      ({ onDown, onMove }) => {
        let h = 0;
        let w = 0;

        onDown(() => {
          [w, h] = getElRealSize(parent);
        });

        const handlerMap: Record<
          typeof placement,
          Parameters<typeof onMove>[0]
        > = {
          top(_e, curr, _lastXY, down) {
            const height = Math.min(max, Math.max(min, h - (curr.y - down.y)));
            parent.style.height = height + 'px';
          },
          bottom(_e, curr, _lastXY, down) {
            const height = Math.min(max, Math.max(min, h + (curr.y - down.y)));
            parent.style.height = height + 'px';
          },
          left(_e, curr, _lastXY, down) {
            const width = Math.min(max, Math.max(min, w - (curr.x - down.x)));
            parent.style.width = width + 'px';
          },
          right(_e, curr, _lastXY, down) {
            const width = Math.min(max, Math.max(min, w + (curr.x - down.x)));
            parent.style.width = width + 'px';
          },
        };
        onMove(handlerMap[placement]);
      },
      { el },
    );
  }, [placement, min, max]);
  return (
    <div
      {...attrs}
      ref={ref}
      className={getClassNames(
        rootName,
        attrs.className,
        `${rootName}--${placement}`,
      )}></div>
  );
});

Resizer.defaultProps = defaultProps;
Resizer.displayName = 'Resizer';
