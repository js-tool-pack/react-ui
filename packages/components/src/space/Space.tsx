import {
  getClassNames,
  getSafeNum,
  castArray,
  joinArray,
} from '@tool-pack/basic';
import {
  mergeReactDefaultProps,
  getComponentClass,
  numToPx,
} from '@pkg/shared';
import type { SpaceProps } from './space.types';
import React, { useMemo } from 'react';

const rootClass = getComponentClass('space');
const defaultProps = {
  tag: 'section',
  fillRatio: 100,
} satisfies Partial<SpaceProps>;

export const Space = React.forwardRef<HTMLElement, SpaceProps>((props, ref) => {
  const {
    attrs = {},
    separator,
    className,
    fillRatio,
    children,
    vertical,
    inline,
    fill,
    tag,
    gap,
  } = mergeReactDefaultProps(props, defaultProps);
  const style = {
    ...attrs.style,
    ...props.style,
    [`--t-space-fill-ratio`]: getSafeNum(fillRatio as number, 0, 100) + '%',
    gap: gap ?? props.style?.gap ?? attrs.style?.gap,
  } as React.CSSProperties;

  style.gap = numToPx(gap, style.gap);
  const _children = useChildren(children, separator);

  return React.createElement(
    tag as string,
    {
      ...attrs,
      className: getClassNames(rootClass, attrs.className, className, {
        [`${rootClass}--vertical`]: vertical,
        [`${rootClass}--inline`]: inline,
        [`${rootClass}--fill`]: fill,
      }),
      style,
      ref,
    },
    _children,
  );
});

function useChildren(
  children: React.ReactNode,
  separator: React.ReactNode,
): React.ReactNode {
  return useMemo(() => {
    if (!separator) return children;

    // const handler = (it: React.ReactNode, i: number) =>
    //   React.createElement('div', { className: itemClass, key: i }, it);

    const cb = React.isValidElement(separator)
      ? // 为separator添加key，否则会报错
        (i: number) =>
          React.cloneElement(separator as React.ReactElement, {
            className: getClassNames(
              separator.props.className,
              `${rootClass}__separator`,
            ),
            key: i,
          })
      : () => separator;

    // 把separator插入数组元素间隔中
    return joinArray<React.ReactNode>(castArray(children), cb /* , handler */);
  }, [children, separator]);
}

Space.displayName = 'Space';
