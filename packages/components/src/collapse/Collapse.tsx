import { getComponentClass, getSizeClassName } from '@pkg/shared';
import React, { useCallback, useEffect, useState } from 'react';
import { CollapseTransition } from '~/collapse-transition';
import type { CollapseProps } from './collapse.types';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { Space } from '@pkg/components';
import { Right } from '@pkg/icons';
import { Icon } from '~/icon';

const rootName = getComponentClass('collapse');

export const Collapse: React.FC<CollapseProps> = React.forwardRef<
  HTMLElement,
  CollapseProps
>((props, ref) => {
  const {
    iconPlacement,
    destroyOnHide,
    attrs = {},
    children,
    disabled,
    expanded,
    onChange,
    header,
    extra,
    title,
    icon,
    size,
  } = props as RequiredPart<CollapseProps, keyof typeof defaultProps>;

  const [visible, setVisible] = useState(expanded || false);

  useEffect(() => {
    setVisible(expanded || false);
  }, [expanded]);

  const Content = (
    <div className={`${rootName}__content`} key={rootName}>
      <div className={`${rootName}__content-inner`} key={rootName}>
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
        })}
      >
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
      {...attrs}
      className={getClassNames(
        rootName,
        attrs.className,
        getSizeClassName(size),
        {
          [`${rootName}--disabled`]: disabled,
          [`${rootName}--active`]: visible,
        },
      )}
      role={attrs.role || 'tab'}
      ref={ref}
    >
      <Space
        attrs={{ onClick: handleHeaderClick }}
        className={`${rootName}__header`}
        tag="div"
        gap={12}
      >
        {HeaderContent}
      </Space>
      <CollapseTransition
        show={destroyOnHide === true ? undefined : visible}
        appear={destroyOnHide === 'mixed' ? null : false}
        name={rootName}
      >
        {destroyOnHide === true ? expanded && Content : Content}
      </CollapseTransition>
    </section>
  );
});

const defaultProps = {
  destroyOnHide: 'mixed',
  iconPlacement: 'start',
  size: 'medium',
} satisfies Partial<CollapseProps>;
Collapse.defaultProps = defaultProps;
Collapse.displayName = 'Collapse';
