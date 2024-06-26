import type { DraggableGroupProps } from './draggable.types';
import React, { createContext, useRef, FC } from 'react';
import { mergeReactDefaultProps } from '@pkg/shared';

const defaultProps = {
  type: 'move',
} satisfies Partial<DraggableGroupProps>;

/**
 * 在 dragstart 里生产，在 dragenter 消费，在 drop ｜ dragend 销毁
 */
export interface DraggableGroupContextProvider {
  readonly children: React.ReactElement;
  cancel?: (id: symbol) => void;
  enter?: (id: symbol) => void;
  drop?: (id: symbol) => void;
  readonly item: unknown;
  id: symbol;
}
export const draggableContext = createContext<{
  fromRef: { current: DraggableGroupContextProvider | null };
  toRef: { current: DraggableGroupContextProvider | null };
  type: Exclude<DraggableGroupProps['type'], undefined>;
}>({
  fromRef: { current: null },
  toRef: { current: null },
  type: 'move',
});

export const DraggableGroup: FC<DraggableGroupProps> = (props) => {
  const { type } = mergeReactDefaultProps(props, defaultProps);
  const fromRef = useRef(null);
  const toRef = useRef(null);
  return (
    <draggableContext.Provider value={{ fromRef, toRef, type }}>
      {props.children}
    </draggableContext.Provider>
  );
};

DraggableGroup.displayName = 'DraggableGroup';
