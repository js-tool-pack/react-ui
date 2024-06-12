import {
  mergeReactDefaultProps,
  getComponentClass,
  useForceUpdate,
} from '@pkg/shared';
import type { CollapseGroupProps } from './collapse.types';
import React, { useEffect, useRef } from 'react';
import { getClassNames } from '@tool-pack/basic';
import { Collapse } from './Collapse';

const rootName = getComponentClass('collapse-group');

export const CollapseGroup = React.forwardRef<HTMLElement, CollapseGroupProps>(
  (props, ref) => {
    const {
      collapseProps,
      attrs = {},
      accordion,
      onChange,
      items,
      tag,
    } = mergeReactDefaultProps(props, defaultProps);
    const list = useRef(items);
    const forceUpdate = useForceUpdate();

    useEffect(() => {
      list.current = items;
    }, [items]);

    const changeHandler = (index: number, active: boolean) => {
      const currentItem = list.current[index]!;
      onChange?.(currentItem, index, active);

      if (active && accordion) {
        list.current.forEach((item) => (item.expanded = false));
        forceUpdate();
      }
      currentItem.expanded = active;
    };

    return React.createElement(
      tag,
      {
        ...attrs,
        className: getClassNames(rootName, attrs.className),
        ref,
      },
      list.current.map(({ onChange, ...rest }, i) => {
        const opts = { ...collapseProps, ...rest };
        return (
          <Collapse
            {...opts}
            onChange={(active) => {
              onChange?.(active);
              changeHandler(i, active);
            }}
            key={opts.key}
          />
        );
      }),
    );
  },
);

const defaultProps = {
  tag: 'div',
} satisfies Partial<CollapseGroupProps>;
CollapseGroup.displayName = 'CollapseGroup';
