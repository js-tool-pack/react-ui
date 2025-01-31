import React, { createContext } from 'react';

export const ImagePreviewGroupContext = createContext<string[] | null>(null);
export const ImagePreviewGroup: React.FC<{ children?: React.ReactNode }> = (
  props,
) => {
  return (
    <ImagePreviewGroupContext value={[]}>
      {props.children}
    </ImagePreviewGroupContext>
  );
};

ImagePreviewGroup.displayName = 'ImagePreviewGroup';
