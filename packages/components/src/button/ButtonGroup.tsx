import { mergeReactDefaultProps, getComponentClass } from '@pkg/shared';
import type { ButtonGroupProps, ButtonProps } from './button.types';
import { getClassNames } from '@tool-pack/basic';
import React from 'react';

const rootClass = getComponentClass('button-group');
const defaultProps = {} satisfies Partial<ButtonGroupProps>;

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (props, ref) => {
    const {
      attrs = {},
      children,
      size,
    } = mergeReactDefaultProps(props, defaultProps);
    return (
      <div
        {...attrs}
        className={getClassNames(rootClass, attrs.className)}
        role={attrs.role || 'group'}
        ref={ref}
      >
        {cloneChildren(children, size)}
      </div>
    );
  },
);

/**
 * 复制 ButtonGroup 的 children
 *
 * tips: 复制 Provider 理论上没直接用 Provider 性能好，推荐直接使用 Provider 设置 size
 */
function isReactProvider(
  children: React.ReactNode,
): children is React.ReactElement {
  return (
    React.isValidElement(children) &&
    children.props.value &&
    children.props.children
  );
}

function cloneChildren(
  children: React.ReactNode,
  size?: ButtonGroupProps['size'],
): React.ReactNode {
  // 未设置 size 就没必要复制 children 了
  if (size === undefined) return children;

  const clone = (children: React.ReactNode) => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return child;
      return React.cloneElement(child, {
        ...child.props,
        size: size ?? child.props.size,
      } as ButtonProps);
    });
  };

  if (isReactProvider(children)) {
    // 如果是 Context.Provider, clone Provider 的 children
    return React.cloneElement(
      children,
      { value: children.props.value } as React.ProviderProps<ButtonProps>,
      clone(children.props.children),
    );
  }
  return clone(children);
}

ButtonGroup.displayName = 'ButtonGroup';
