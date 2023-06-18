import React, { useMemo } from 'react';
import { SpaceProps } from './space.types';
import { getComponentClass, numToPx } from '@pkg/shared';
import { castArray, getClassNames, joinArray } from '@tool-pack/basic';

const rootClass = getComponentClass('space');

export const Space: React.FC<SpaceProps> = React.forwardRef<
  HTMLElement,
  SpaceProps
>((props, ref) => {
  const { separator, tag, className, style, gap, children, vertical, ...rest } =
    props;

  const _gap = numToPx(gap, style?.gap);

  const _children = useMemo(() => {
    if (!separator) return children;
    return joinArray<React.ReactNode>(castArray(children), separator);
  }, [children, separator]);

  return React.createElement(
    tag as string,
    {
      ...rest,
      ref,
      className: getClassNames(rootClass, className, {
        [`${rootClass}__vertical`]: vertical,
      }),
      style: { ...style, gap: _gap },
    },
    _children,
  );
});

Space.defaultProps = {
  tag: 'section',
};

Space.displayName = 'Space';
