import { mergeReactDefaultProps, getComponentClass } from '@pkg/shared';
import type { WordBalloonProps } from './word-balloon.types';
import { getClassNames } from '@tool-pack/basic';
import React from 'react';

const defaultProps = {
  placement: 'top',
  showArrow: true,
} satisfies Partial<WordBalloonProps>;
const rootName = getComponentClass('word-balloon');

export const WordBalloon = React.forwardRef<HTMLDivElement, WordBalloonProps>(
  (props, ref) => {
    const {
      contentStyle,
      background,
      arrowStyle,
      attrs = {},
      placement,
      showArrow,
      children,
    } = mergeReactDefaultProps(props, defaultProps);
    return (
      <div
        {...attrs}
        className={getClassNames(
          rootName,
          attrs.className,
          `${rootName}--${placement}`,
          { [`${rootName}--no-arrow`]: !showArrow },
        )}
        style={
          {
            ...attrs.style,
            '--t-word-balloon-bg': background || '',
          } as React.CSSProperties
        }
        ref={ref}
      >
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
  },
);

WordBalloon.displayName = 'WordBalloon';
