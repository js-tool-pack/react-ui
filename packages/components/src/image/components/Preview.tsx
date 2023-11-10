import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import type { ImageProps } from '~/image';
import { getClasses } from '@pkg/shared';
import React from 'react';

const cls = getClasses('image', [], []);
const defaultProps = {} satisfies Partial<ImageProps>;

export const Preview: React.FC<ImageProps> = React.forwardRef<
  HTMLDivElement,
  ImageProps
>((props, ref) => {
  const { attrs = {} } = props as RequiredPart<
    ImageProps,
    keyof typeof defaultProps
  >;
  return (
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className)}
      ref={ref}
    ></div>
  );
});

Preview.defaultProps = defaultProps;
Preview.displayName = 'Image';
