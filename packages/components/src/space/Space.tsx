import React, { useMemo } from 'react';
import type { SpaceProps } from './space.types';
import { getComponentClass, numToPx } from '@pkg/shared';
import {
  castArray,
  getClassNames,
  getSafeNum,
  joinArray,
} from '@tool-pack/basic';
import { RequiredPart } from '@tool-pack/types';

const rootClass = getComponentClass('space');
const defaultProps = {
  tag: 'section',
  fillRatio: 100,
} satisfies Partial<SpaceProps>;

export const Space: React.FC<SpaceProps> = React.forwardRef<
  HTMLElement,
  SpaceProps
>((props, ref) => {
  const {
    separator,
    tag,
    inline,
    className,
    gap,
    children,
    vertical,
    fill,
    fillRatio,
    attrs = {},
  } = props as RequiredPart<SpaceProps, keyof typeof defaultProps>;

  const style = {
    ...attrs.style,
    ...props.style,
    gap: gap ?? props.style?.gap ?? attrs.style?.gap,
    [`--t-space-fill-ratio`]: getSafeNum(fillRatio as number, 0, 100) + '%',
  } as React.CSSProperties;

  style.gap = numToPx(gap, style.gap);
  const _children = useChildren(children, separator);

  return React.createElement(
    tag as string,
    {
      ...attrs,
      ref,
      className: getClassNames(rootClass, attrs.className, className, {
        [`${rootClass}--vertical`]: vertical,
        [`${rootClass}--inline`]: inline,
        [`${rootClass}--fill`]: fill,
      }),
      style,
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
            key: i,
            className: getClassNames(
              separator.props.className,
              `${rootClass}__separator`,
            ),
          })
      : () => separator;

    // 把separator插入数组元素间隔中
    return joinArray<React.ReactNode>(castArray(children), cb /* , handler */);
  }, [children, separator]);
}

Space.defaultProps = defaultProps;
Space.displayName = 'Space';
