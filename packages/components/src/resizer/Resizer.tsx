import React, { useEffect, useRef } from 'react';
import type { ResizerProps } from './resizer.types';
import { getComponentClass } from '@pkg/shared';
import { onDragEvent } from '@tool-pack/dom';
import { getClassNames } from '@tool-pack/basic';
import type { RequiredPart } from '@tool-pack/types';

const rootName = getComponentClass('resizer');

export const Resizer: React.FC<ResizerProps> = (props) => {
  const { placement, className } = props as RequiredPart<
    ResizerProps,
    keyof typeof defaultProps
  >;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    return onDragEvent(
      ({ onDown, onMove }) => {
        let parentHeight = 0;
        let parentWidth = 0;

        onDown(() => {
          const computed = getComputedStyle(parent);
          parentHeight = parseFloat(computed.height);
          parentWidth = parseFloat(computed.width);
        });

        const handlerMap: Record<
          typeof placement,
          Parameters<typeof onMove>[0]
        > = {
          top(_e, currentXY, _lastXY, downXY) {
            const height = Math.max(0, parentHeight - (currentXY.y - downXY.y));
            parent.style.height = height + 'px';
          },
          bottom(_e, currentXY, _lastXY, downXY) {
            const height = Math.max(0, parentHeight + (currentXY.y - downXY.y));
            parent.style.height = height + 'px';
          },
          left(_e, currentXY, _lastXY, downXY) {
            const width = Math.max(0, parentWidth - (currentXY.x - downXY.x));
            parent.style.width = width + 'px';
          },
          right(_e, currentXY, _lastXY, downXY) {
            const width = Math.max(0, parentWidth + (currentXY.x - downXY.x));
            parent.style.width = width + 'px';
          },
        };
        onMove(handlerMap[placement]);
      },
      { el },
    );
  }, [placement]);
  return (
    <div
      {...props}
      ref={ref}
      className={getClassNames(
        rootName,
        className,
        `${rootName}--${placement}`,
      )}></div>
  );
};

const defaultProps = {
  placement: 'bottom',
} satisfies Partial<ResizerProps>;

Resizer.defaultProps = defaultProps;
Resizer.displayName = 'Resizer';
