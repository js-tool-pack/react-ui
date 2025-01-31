import type { BaseLayoutsProps, LayoutProps } from './layout.types';
import { getClassNames } from '@tool-pack/basic';
import { getComponentClass } from '@pkg/shared';
import { RequiredPart } from '@tool-pack/types';
import { useElement } from './useElement';
import React from 'react';

const rootClass = getComponentClass('layout');
export const Layout: React.FC<LayoutProps> = (props) => {
  const {
    tag = 'section',
    attrs = {},
    className,
    vertical,
    children,
    style,
    ref,
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
};

// main
const mainRootClass = getComponentClass('main');
export const Main: React.FC<BaseLayoutsProps> = (props) => {
  return useElement({ tag: 'main', ...props }, props.ref, mainRootClass);
};

// aside
const asideRootClass = getComponentClass('aside');
export const Aside: React.FC<BaseLayoutsProps> = (props) => {
  return useElement({ tag: 'aside', ...props }, props.ref, asideRootClass);
};

// header
const headerRootClass = getComponentClass('header');
export const Header: React.FC<BaseLayoutsProps> = (props) => {
  return useElement({ tag: 'header', ...props }, props.ref, headerRootClass);
};

// footer
const footerRootClass = getComponentClass('footer');
export const Footer: React.FC<BaseLayoutsProps> = (props) => {
  return useElement({ tag: 'footer', ...props }, props.ref, footerRootClass);
};
