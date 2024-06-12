import { TransitionProps, CB, El } from '~/transition/transition.types';
import { getClasses as getClassMap, useForwardRef } from '@pkg/shared';
import { LIFE_CIRCLE, STATUS } from '~/transition/transition.enums';
import { addTransition, getClasses } from '~/transition/utils';
import React, { cloneElement, useEffect } from 'react';
import { getClassNames } from '@tool-pack/basic';

const cls = getClassMap('transition', [], ['invisible']);

export function useTransition(
  status: STATUS,
  name: string,
  children?: El,
  innerCB?: CB,
  cb?: CB,
  { attrs = {} }: Partial<TransitionProps> = {},
): React.ReactElement<HTMLElement> | undefined {
  const elRef = useForwardRef(
    (children as React.FunctionComponentElement<HTMLElement>)?.ref,
  ) as React.MutableRefObject<HTMLElement | null>;

  if (!children) elRef.current = null;

  const noTrans = isNoTrans();
  const classes = getClasses(name, status === STATUS.show);

  useEffect(() => {
    const el = elRef.current;
    // console.log(from, 'status', STATUS[status], !!transRef.current);
    if (!el) return;

    emits(el, status, LIFE_CIRCLE.before);
    if (noTrans) return;

    const trans = addTransition({
      on: (lifeCircle) => emits(el, status, lifeCircle),
      classes,
      el,
    });
    trans.start();
    return () => {
      trans.clearListener();
    };
  }, [children, status, classes, cb]);

  if (!showChildren(children)) return;
  return cloneElement(children, getProps(children));

  function emits(...args: Parameters<CB>): void {
    const cbs = [innerCB, cb].filter(Boolean) as CB[];
    cbs.forEach((cb) => cb(...args));
  }
  function showChildren(children: unknown): children is React.ReactElement {
    if (!children) return false;
    return STATUS.none !== status && React.isValidElement(children);
  }
  function isNoTrans(): boolean {
    return (
      [STATUS.invisible, STATUS.none, STATUS.idle].includes(status) || !children
    );
  }
  function getProps(
    children: React.ReactElement,
  ): React.HTMLAttributes<HTMLElement> {
    const style = {
      ...children.props.attrs?.style,
      ...children.props.style,
      ...attrs.style,
    };

    const className = getClassNames(
      children.props.className,
      children.props.attrs?.className,
      attrs.className,
      {
        [classes?.from]: classes && [STATUS.show, STATUS.hide].includes(status),
        [cls['--'].invisible]: STATUS.invisible === status,
      },
    );

    const props = {
      ...attrs,
      attrs: children.props.attrs,
      ref: elRef,
      className,
      style,
    } as {
      attrs: React.HTMLAttributes<HTMLElement>;
    } & React.HTMLAttributes<HTMLElement> &
      React.DOMAttributes<HTMLElement>;

    if (typeof children.props.attrs === 'object') {
      props.attrs = { ...children.props.attrs, className, style };
    } else {
      props.className = className;
      props.style = style;
    }

    return props;
  }
}
