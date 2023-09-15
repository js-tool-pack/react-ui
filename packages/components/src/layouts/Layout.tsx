import type { BaseLayoutsProps, LayoutProps } from './layout.types';
import { getClassNames } from '@tool-pack/basic';
import { getComponentClass } from '@pkg/shared';
import { RequiredPart } from '@tool-pack/types';
import { useElement } from './useElement';
import React from 'react';

const rootClass = getComponentClass('layout');
export const Layout = React.forwardRef<HTMLElement, LayoutProps>(
  (props, ref) => {
    const {
      attrs = {},
      className,
      vertical,
      children,
      style,
      tag,
    } = props as RequiredPart<LayoutProps, 'tag'>;
    return React.createElement(tag, {
      ...attrs,
      className: getClassNames(rootClass, className, attrs.className, {
        [`${rootClass}--v`]: vertical,
      }),
      style: { ...attrs.style, ...style },
      children,
      ref,
    });
  },
);
Layout.defaultProps = {
  tag: 'section',
} satisfies Partial<LayoutProps>;

// main
const mainRootClass = getComponentClass('main');
export const Main: React.FC<BaseLayoutsProps> = React.forwardRef<
  HTMLElement,
  BaseLayoutsProps
>((props, ref) => {
  return useElement(props, ref, mainRootClass);
});
Main.defaultProps = {
  tag: 'main',
} satisfies Partial<BaseLayoutsProps>;

// aside
const asideRootClass = getComponentClass('aside');
export const Aside: React.FC<BaseLayoutsProps> = React.forwardRef<
  HTMLElement,
  BaseLayoutsProps
>((props, ref) => {
  return useElement(props, ref, asideRootClass);
});
Aside.defaultProps = {
  tag: 'aside',
} satisfies Partial<BaseLayoutsProps>;

// header
const headerRootClass = getComponentClass('header');
export const Header: React.FC<BaseLayoutsProps> = React.forwardRef<
  HTMLElement,
  BaseLayoutsProps
>((props, ref) => {
  return useElement(props, ref, headerRootClass);
});
Header.defaultProps = {
  tag: 'header',
} satisfies Partial<BaseLayoutsProps>;

// footer
const footerRootClass = getComponentClass('footer');
export const Footer: React.FC<BaseLayoutsProps> = React.forwardRef<
  HTMLElement,
  BaseLayoutsProps
>((props, ref) => {
  return useElement(props, ref, footerRootClass);
});
Footer.defaultProps = {
  tag: 'footer',
} satisfies Partial<BaseLayoutsProps>;
