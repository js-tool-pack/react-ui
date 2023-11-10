import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import type { ImageProps } from './image.types';
import { getClasses } from '@pkg/shared';
import React from 'react';

const cls = getClasses('image', [], []);
const defaultProps = {} satisfies Partial<ImageProps>;

export const Image: React.FC<ImageProps> = React.forwardRef<
  HTMLDivElement,
  ImageProps
>((props, ref) => {
  const {
    imgAttrs = {},
    attrs = {},
    height,
    width,
    src,
    fit,
    alt,
  } = props as RequiredPart<ImageProps, keyof typeof defaultProps>;
  return (
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className)}
      ref={ref}
    >
      <img
        style={{
          ...imgAttrs.style,
          objectFit: fit || imgAttrs.style?.objectFit,
        }}
        height={height || imgAttrs.height}
        width={width || imgAttrs.width}
        src={src || imgAttrs.src}
        alt={alt || imgAttrs.alt}
      />
    </div>
  );
});

Image.defaultProps = defaultProps;
Image.displayName = 'Image';
