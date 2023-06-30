import React from 'react';
import type { WordBalloonProps } from './word-balloon.types';
import { getComponentClass } from '@pkg/shared';
import { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';

const rootName = getComponentClass('word-balloon');

export const WordBalloon: React.FC<WordBalloonProps> = React.forwardRef<
  HTMLDivElement,
  WordBalloonProps
>((props, ref) => {
  const {
    children,
    placement,
    showArrow,
    background,
    style,
    contentStyle,
    arrowStyle,
    ...rest
  } = props as RequiredPart<WordBalloonProps, keyof typeof defaultProps>;
  return (
    <div
      {...rest}
      ref={ref}
      style={
        {
          ...style,
          '--t-word-balloon-bg': background || '',
        } as React.CSSProperties
      }
      className={getClassNames(rootName, `${rootName}--${placement}`)}>
      <div className={`${rootName}__content`} style={contentStyle}>
        {children}
      </div>
      {showArrow && (
        <div className={`${rootName}__arrow`} style={arrowStyle}>
          <svg viewBox="-8 -5.5 16 5.515">
            <path d="M8-5.5A4 4 180 005.1716-4.3284L1.4142-.5711A2 2 180 01-1.4142-.5711L-5.1716-4.3284A4 4 180 00-8-5.5Z" />
          </svg>
        </div>
      )}
    </div>
  );
});

const defaultProps = {
  placement: 'bottom',
  showArrow: true,
} satisfies Partial<WordBalloonProps>;
WordBalloon.defaultProps = defaultProps;

WordBalloon.displayName = 'WordBalloon';
