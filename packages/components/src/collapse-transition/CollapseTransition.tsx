import React, { useCallback, useMemo } from 'react';
import type { CollapseTransitionProps } from './collapse-transition.types';
import { getComponentClass } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import {
  Transition,
  TRANSITION_LIFE_CIRCLE,
  TRANSITION_STATUS,
  TransitionCB,
} from '../transition';

const rootName = getComponentClass('collapse-transition');

export const CollapseTransition: React.FC<CollapseTransitionProps> = (
  props,
) => {
  const { horizontal, on, children, ...rest } = props as RequiredPart<
    CollapseTransitionProps,
    keyof typeof defaultProps
  >;

  const sizeType: 'width' | 'height' = useMemo(
    () => (horizontal ? 'width' : 'height'),
    [horizontal],
  );

  const callback: TransitionCB = useCallback(
    (el, status, lifeCircle) => {
      on?.(el, status, lifeCircle);
      const setSizeByScrollSize = () => {
        el.style[sizeType] =
          sizeType === 'height'
            ? el.scrollHeight + 'px'
            : // 宽度不取scrollWidth，因为scrollWidth和width是一样的，所以取的是父元素的宽度
              getComputedStyle(el.parentElement as HTMLElement).width;
      };
      const clearSize = () => {
        el.style[sizeType] = '';
      };

      // --- show ---
      if (TRANSITION_STATUS.show === status) {
        switch (lifeCircle) {
          case TRANSITION_LIFE_CIRCLE.before:
            setSizeByScrollSize();
            break;
          case TRANSITION_LIFE_CIRCLE.after:
            clearSize();
            break;
        }
        return;
      }

      // --- hide ---
      if (TRANSITION_STATUS.hide === status) {
        switch (lifeCircle) {
          case TRANSITION_LIFE_CIRCLE.ready:
            setSizeByScrollSize();
            break;
          case TRANSITION_LIFE_CIRCLE.before:
            clearSize();
            break;
          case TRANSITION_LIFE_CIRCLE.after:
            el.style.display = 'none';
            break;
        }
      }
    },
    [sizeType],
  );

  const Body = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement, {
        key: rootName,
        className: getClassNames(
          rootName,
          (children as React.ReactElement).props.className,
          {
            [`${rootName}--w`]: horizontal,
            [`${rootName}--h`]: !horizontal,
          },
        ),
      })
    : children;

  return (
    <Transition {...rest} name={rootName} on={callback}>
      {Body}
    </Transition>
  );
};

const defaultProps = {} satisfies Partial<CollapseTransitionProps>;
CollapseTransition.defaultProps = defaultProps;
CollapseTransition.displayName = 'CollapseTransition';
