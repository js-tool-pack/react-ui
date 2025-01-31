import {
  mergeReactDefaultProps,
  getComponentClass,
  ChildrenProps,
} from '@pkg/shared';
import type { ButtonGroupProps, ButtonProps } from './button.types';
import { getClassNames } from '@tool-pack/basic';
import React from 'react';

const rootClass = getComponentClass('button-group');
const defaultProps = {} satisfies Partial<ButtonGroupProps>;

export const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  const {
    attrs = {},
    children,
    size,
    ref,
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
};

/**
 * 复制 ButtonGroup 的 children
 *
 * tips: 复制 Provider 理论上没直接用 Provider 性能好，推荐直接使用 Provider 设置 size
 */
function isReactProvider(
  children: React.ReactNode,
): children is React.ReactElement {
  if (!React.isValidElement(children)) return false;
  const props = children.props as ChildrenProps &
    React.ProviderProps<ButtonProps>;
  return Boolean(props.value && props.children);
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
      const props = child.props as ChildrenProps & ButtonProps;
      return React.cloneElement(child, {
        ...props,
        size: size ?? props.size,
      } as ButtonProps);
    });
  };

  if (isReactProvider(children)) {
    // 如果是 Context.Provider, clone Provider 的 children
    const props = children.props as React.ProviderProps<ButtonProps>;
    return React.cloneElement(
      children,
      { value: props.value } as React.ProviderProps<ButtonProps>,
      clone(props.children),
    );
  }
  return clone(children);
}

ButtonGroup.displayName = 'ButtonGroup';
