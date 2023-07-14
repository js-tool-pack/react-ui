import React, { useCallback, useEffect, useState } from 'react';
import { getComponentClass, getSizeClassName } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import type { CollapseProps } from './collapse.types';
import { CollapseTransition } from '../collapse-transition';
import { Icon } from '../icon';
import { Right } from '@pkg/icons';
import { Space } from '@pkg/components';

const rootName = getComponentClass('collapse');

export const Collapse: React.FC<CollapseProps> = (props) => {
  const {
    icon,
    size,
    extra,
    title,
    header,
    children,
    disabled,
    expanded,
    onChange,
    className,
    iconPlacement,
    destroyOnHide,
    ...rest
  } = props as RequiredPart<CollapseProps, keyof typeof defaultProps>;

  const [visible, setVisible] = useState(expanded || false);

  useEffect(() => {
    setVisible(expanded || false);
  }, [expanded]);

  const Content = (
    <div key={rootName} className={`${rootName}__content`}>
      <div key={rootName} className={`${rootName}__content-inner`}>
        {children}
      </div>
    </div>
  );

  const _Icon =
    icon !== null &&
    (icon?.(visible) || (
      <Icon
        className={getClassNames(`${rootName}__icon`, {
          [`${rootName}__icon--active`]: visible,
        })}>
        <Right />
      </Icon>
    ));

  const HeaderContent = header ? (
    header(visible)
  ) : (
    <>
      {iconPlacement === 'start' && _Icon}
      <div className={`${rootName}__title`}>{title}</div>
      {extra}
      {iconPlacement === 'end' && _Icon}
    </>
  );

  const handleHeaderClick = useCallback(() => {
    if (disabled) return;
    let active;
    setVisible((v) => (active = !v));
    onChange?.(active || false);
  }, [disabled]);

  return (
    <section
      {...rest}
      className={getClassNames(rootName, className, getSizeClassName(size), {
        [`${rootName}--active`]: visible,
        [`${rootName}--disabled`]: disabled,
      })}>
      <Space
        tag="div"
        className={`${rootName}__header`}
        gap={12}
        onClick={handleHeaderClick}>
        {HeaderContent}
      </Space>
      <CollapseTransition
        show={destroyOnHide === true ? undefined : visible}
        appear={destroyOnHide === 'mixed' ? null : false}
        name={rootName}>
        {destroyOnHide === true ? expanded && Content : Content}
      </CollapseTransition>
    </section>
  );
};

const defaultProps = {
  destroyOnHide: 'mixed',
  size: 'medium',
  iconPlacement: 'start',
  role: 'tab',
} satisfies Partial<CollapseProps>;
Collapse.defaultProps = defaultProps;
Collapse.displayName = 'Collapse';
