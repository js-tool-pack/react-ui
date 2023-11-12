import type { ImagePreviewProps } from '~/image/image.types';
import { useUniqueRoot, getClasses } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { createPortal } from 'react-dom';
import React from 'react';

const cls = getClasses('imagePreview', [], []);
const defaultProps = {} satisfies Partial<ImagePreviewProps>;

export const ImagePreview: React.FC<ImagePreviewProps> = React.forwardRef<
  HTMLDivElement,
  ImagePreviewProps
>((props, ref) => {
  const { attrs = {}, images } = props as RequiredPart<
    ImagePreviewProps,
    keyof typeof defaultProps
  >;

  const root = useUniqueRoot(cls.root);

  return createPortal(
    <div
      {...attrs}
      className={getClassNames(cls.root, attrs.className)}
      ref={ref}
    >
      {images.map((i) => (
        <img src={i} alt="" />
      ))}
    </div>,
    root.current!,
  );
});

ImagePreview.defaultProps = defaultProps;
ImagePreview.displayName = 'Image';
