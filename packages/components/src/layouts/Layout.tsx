import React from 'react';
import { getComponentClass } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import type { BaseLayoutsProps, LayoutProps } from './layout.types';
import { useElement } from './useElement';
import { RequiredPart } from '@tool-pack/types';

const rootClass = getComponentClass('layout');
export const Layout = React.forwardRef<HTMLElement, LayoutProps>(
  (props, ref) => {
    const { tag, vertical, className, children, ...rest } =
      props as RequiredPart<LayoutProps, 'tag'>;
    return React.createElement(tag, {
      ...rest,
      ref,
      className: getClassNames(rootClass, {
        vertical,
        [className as string]: className,
      }),
      children,
    });
  },
);
Layout.defaultProps = {
  tag: 'section',
} satisfies Partial<LayoutProps>;

// main
const mainRootClass = getComponentClass('main');
export const Main: React.FC<BaseLayoutsProps> = (props) => {
  return useElement(props, mainRootClass);
};
Main.defaultProps = {
  tag: 'main',
} satisfies Partial<BaseLayoutsProps>;

// aside
const asideRootClass = getComponentClass('aside');
export const Aside: React.FC<BaseLayoutsProps> = (props) => {
  return useElement(props, asideRootClass);
};
Aside.defaultProps = {
  tag: 'aside',
} satisfies Partial<BaseLayoutsProps>;

// header
const headerRootClass = getComponentClass('header');
export const Header: React.FC<BaseLayoutsProps> = (props) => {
  return useElement(props, headerRootClass);
};
Header.defaultProps = {
  tag: 'header',
} satisfies Partial<BaseLayoutsProps>;

// footer
const footerRootClass = getComponentClass('footer');
export const Footer: React.FC<BaseLayoutsProps> = (props) => {
  return useElement(props, footerRootClass);
};
Footer.defaultProps = {
  tag: 'footer',
} satisfies Partial<BaseLayoutsProps>;
