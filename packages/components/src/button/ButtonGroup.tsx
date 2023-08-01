import React from 'react';
import type { ButtonGroupProps, ButtonProps } from './button.types';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import { RequiredPart } from '@tool-pack/types';

const rootClass = getComponentClass('button-group');

const defaultProps = {
  role: 'group',
} satisfies Partial<ButtonGroupProps>;

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const { className, children, size, buttonProps, ...rest } =
      props as RequiredPart<ButtonGroupProps, keyof typeof defaultProps>;

    const clonedChildren = React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;
      return React.cloneElement(child, {
        ...buttonProps,
        ...child.props,
        size: size ?? child.props.size ?? buttonProps?.size,
      } as ButtonProps);
    });

    return (
      <div {...rest} ref={ref} className={getClassNames(rootClass, className)}>
        {clonedChildren}
      </div>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = defaultProps;
