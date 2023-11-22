import { PropsBase } from '@pkg/shared';
import React from 'react';

type ImgAttrs = Partial<React.ImgHTMLAttributes<HTMLImageElement>>;
type ImgStyles = Partial<React.CSSProperties>;

export interface ImageProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'>,
    Pick<Partial<HTMLImageElement>, 'height' | 'width' | 'src' | 'alt'> {
  fit?: ImgStyles['objectFit'];
  imgAttrs?: ImgAttrs;
  fallback?: string;
  preview?: boolean;
  lazy?: boolean;
}

export interface ImagePreviewProps
  extends Omit<PropsBase<HTMLDivElement>, 'children'> {
  images: (undefined | string)[];
  onHide?: () => void;
}
