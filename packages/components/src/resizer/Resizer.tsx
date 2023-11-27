import { getComponentClass, getElRealSize, useForwardRef } from '@pkg/shared';
import { getClassNames, getSafeNum } from '@tool-pack/basic';
import type { RequiredPart } from '@tool-pack/types';
import type { ResizerProps } from './resizer.types';
import { onDragEvent } from '@tool-pack/dom';
import React, { useEffect } from 'react';

const rootName = getComponentClass('resizer');

const defaultProps = {
  max: Number.MAX_SAFE_INTEGER,
  placement: 'bottom',
  min: 0,
} satisfies Partial<ResizerProps>;

export const Resizer: React.FC<ResizerProps> = React.forwardRef<
  HTMLDivElement,
  ResizerProps
>((props, _ref) => {
  const {
    attrs = {},
    placement,
    onResized,
    min,
    max,
  } = props as RequiredPart<ResizerProps, keyof typeof defaultProps>;
  const ref = useForwardRef(_ref);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    return onDragEvent(
      ({ onDown, onMove, onUp }) => {
        let h = 0;
        let w = 0;

        onDown(() => ([w, h] = getElRealSize(parent)));
        const safeValue = (value: number) => getSafeNum(value, min, max) + 'px';

        const handlerMap: Record<
          typeof placement,
          Parameters<typeof onMove>[0]
        > = {
          bottom(_e, curr, _lastXY, down) {
            parent.style.height = safeValue(h + (curr.y - down.y));
          },
          top(_e, curr, _lastXY, down) {
            parent.style.height = safeValue(h - (curr.y - down.y));
          },
          // eslint-disable-next-line perfectionist/sort-objects
          right(_e, curr, _lastXY, down) {
            parent.style.width = safeValue(w + (curr.x - down.x));
          },
          left(_e, curr, _lastXY, down) {
            parent.style.width = safeValue(w - (curr.x - down.x));
          },
        };
        onMove(handlerMap[placement]);

        onUp((_e, currentXY, downXY) => {
          if (currentXY.x !== downXY.x || currentXY.y !== downXY.y) {
            onResized?.();
          }
        });
      },
      { el },
    );
  }, [placement, onResized, min, max]);
  return (
    <div
      {...attrs}
      className={getClassNames(
        rootName,
        attrs.className,
        `${rootName}--${placement}`,
      )}
      ref={ref}
    ></div>
  );
});

Resizer.defaultProps = defaultProps;
Resizer.displayName = 'Resizer';
