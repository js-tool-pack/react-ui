import React, { createContext } from 'react';

export const ImagePreviewGroupContext = createContext<string[] | null>(null);
export const ImagePreviewGroup: React.FC<{ children?: React.ReactNode }> = (
  props,
) => {
  return (
    <ImagePreviewGroupContext.Provider value={[]}>
      {props.children}
    </ImagePreviewGroupContext.Provider>
  );
};

ImagePreviewGroup.displayName = 'ImagePreviewGroup';
