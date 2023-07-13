import React, { useEffect, useRef } from 'react';
import { getComponentClass, useForceUpdate } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import type { CollapseGroupProps } from './collapse.types';
import { Collapse } from './Collapse';

const rootName = getComponentClass('collapse-group');

export const CollapseGroup: React.FC<CollapseGroupProps> = (props) => {
  const { options, onChange, accordion, items, className, ...rest } =
    props as RequiredPart<CollapseGroupProps, keyof typeof defaultProps>;

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

  return (
    <div {...rest} className={getClassNames(rootName, className)}>
      {list.current.map(({ onChange, ...rest }, i) => {
        const opts = { ...options, ...rest };
        return (
          <Collapse
            {...opts}
            onChange={(active) => {
              onChange?.(active);
              changeHandler(i, active);
            }}
          />
        );
      })}
    </div>
  );
};

const defaultProps = {} satisfies Partial<CollapseGroupProps>;
CollapseGroup.defaultProps = defaultProps;
CollapseGroup.displayName = 'CollapseGroup';
