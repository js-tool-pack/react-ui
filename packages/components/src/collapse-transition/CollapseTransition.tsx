import React, { useCallback, useMemo, useRef } from 'react';
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
  const { width, on, children, ...rest } = props as RequiredPart<
    CollapseTransitionProps,
    keyof typeof defaultProps
  >;
  const memorizedSize = useRef('');

  const sizeType: 'maxWidth' | 'maxHeight' = useMemo(
    () => (width ? 'maxWidth' : 'maxHeight'),
    [width],
  );

  const callback: TransitionCB = useCallback(
    (el, status, lifeCircle) => {
      // console.log(
      //   TRANSITION_STATUS[status],
      //   TRANSITION_LIFE_CIRCLE[lifeCircle],
      // );
      on?.(el, status, lifeCircle);

      const getRealSize = () => {
        if (!width) return el.scrollHeight + 'px';
        if (TRANSITION_STATUS.hide === status) return el.offsetWidth + 'px';

        // el.style[sizeType] = 'none'; // css 未加 !important 时有效，无法添加 !important
        // el.style.cssText = `${sizeType}: none!important;`; // 会导致行内样式丢失
        el.style.setProperty('max-width', 'none', 'important');
        const w = el.offsetWidth + 'px';
        el.style[sizeType] = '';
        void el.offsetWidth;
        return w;
      };
      const memorySize = () => {
        memorizedSize.current = getRealSize();
      };
      const restoreSize = () => {
        el.style[sizeType] = memorizedSize.current;
      };
      const closeSize = () => {
        el.style[sizeType] = '0';
      };
      const clearSize = () => {
        el.style[sizeType] = '';
      };

      // --- show ---
      if (TRANSITION_STATUS.show === status) {
        switch (lifeCircle) {
          case TRANSITION_LIFE_CIRCLE.ready:
            // el.style.display = '';
            memorySize();
            closeSize();
            break;
          case TRANSITION_LIFE_CIRCLE.go:
            restoreSize();
            // case TRANSITION_LIFE_CIRCLE.run:
            // el.style.transition = 'none';
            // const s = getRealSize();
            // el.style.transition = '';
            // el.style[sizeType] = s;
            // void el.offsetWidth;
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
            memorySize();
            restoreSize();
            break;
          case TRANSITION_LIFE_CIRCLE.go:
            closeSize();
            break;
          case TRANSITION_LIFE_CIRCLE.after:
            clearSize();
            // el.style.display = 'none';
            break;
        }
      }
    },
    [sizeType, width],
  );

  const Body = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement, {
        key: rootName,
        className: getClassNames(
          rootName,
          (children as React.ReactElement).props.className,
          {
            [`${rootName}--w`]: width,
            [`${rootName}--h`]: !width,
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
