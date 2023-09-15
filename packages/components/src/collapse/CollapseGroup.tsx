import { getComponentClass, useForceUpdate } from '@pkg/shared';
import type { CollapseGroupProps } from './collapse.types';
import type { RequiredPart } from '@tool-pack/types';
import React, { useEffect, useRef } from 'react';
import { getClassNames } from '@tool-pack/basic';
import { Collapse } from './Collapse';

const rootName = getComponentClass('collapse-group');

export const CollapseGroup: React.FC<CollapseGroupProps> = React.forwardRef<
  HTMLElement,
  CollapseGroupProps
>((props, ref) => {
  const {
    collapseProps,
    attrs = {},
    accordion,
    onChange,
    items,
    tag,
  } = props as RequiredPart<CollapseGroupProps, keyof typeof defaultProps>;

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
        />
      );
    }),
  );
});

const defaultProps = {
  tag: 'div',
} satisfies Partial<CollapseGroupProps>;
CollapseGroup.defaultProps = defaultProps;
CollapseGroup.displayName = 'CollapseGroup';
