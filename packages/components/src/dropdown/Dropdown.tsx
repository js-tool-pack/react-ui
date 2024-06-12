import type {
  DropdownOptionsItem,
  DropdownDivider,
  DropdownOption,
  DropdownProps,
} from './dropdown.types';
import {
  useStateWithTrailClear,
  mergeReactDefaultProps,
  getComponentClass,
} from '@pkg/shared';
import { DropdownInnerOption } from './DropdownInnerOption';
import { getClassNames } from '@tool-pack/basic';
import React, { useRef } from 'react';
import { Popover } from '~/popover';
import { Divider } from '~/divider';

const defaultProps = {
  placement: 'bottom-start',
  hideOnClick: true,
  showArrow: false,
  size: 'medium',
} satisfies Partial<DropdownProps>;

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    hideOnClick,
    showArrow,
    children,
    onSelect,
    options,
    visible,
    header,
    footer,
    size,
    ...rest
  } = mergeReactDefaultProps(props, defaultProps);
  const boxRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useStateWithTrailClear(visible);

  const name = 'dropdown';
  const rootClass = getComponentClass(name);

  const Box = (
    <>
      {header && <div className={`${rootClass}__header`}>{header}</div>}
      <div className={`${rootClass}__body`} ref={boxRef}>
        <ul className={`${rootClass}__options`}>{handleOptions(options)}</ul>
      </div>
      {footer && <div className={`${rootClass}__footer`}>{footer}</div>}
    </>
  );

  return (
    <Popover
      {...rest}
      showArrow={showArrow}
      visible={show}
      content={Box}
      name={name}
    >
      {children}
    </Popover>
  );

  function handleOptions(
    options: DropdownOptionsItem[] = [],
    parents: DropdownOption[] = [],
  ): React.ReactElement[] {
    return options.map((opt) => {
      if (isDivider(opt)) {
        const { type: _type, tag = 'li', key, ...rest } = opt;
        rest.attrs ||= {};
        rest.attrs.className = getClassNames(
          rest.attrs.className,
          `${rootClass}__divider`,
        );
        return <Divider {...rest} tag={tag} key={key} />;
      }
      const {
        attrs: optAttrs = {},
        children,
        label,
        type,
        key,
        ...optRest
      } = opt;

      if (type === 'group') {
        return (
          <li className={`${rootClass}__group`} key={key}>
            <DropdownInnerOption
              {...optRest}
              attrs={{
                className: `${rootClass}__group-title`,
                role: 'heading',
              }}
              size={size}
              tag="div"
              readonly
            >
              {label}
            </DropdownInnerOption>
            <ul className={`${rootClass}__group-body`}>
              {handleOptions(children, [...parents, opt])}
            </ul>
          </li>
        );
      }

      const emit = (option: DropdownOption, parent: DropdownOption[]) => {
        onSelect?.(option, parent);
        hideOnClick && setShow(false);
      };

      const onClick = (e: React.MouseEvent<HTMLElement>) => {
        optAttrs.onClick?.(e);
        e.stopPropagation();
        if (opt.disabled || opt.type === 'group' || children?.length) return;
        emit(opt, parents);
      };
      const option = (
        <DropdownInnerOption
          {...optRest}
          expandable={children && !!children.length}
          attrs={{ ...optAttrs, onClick }}
          size={size}
          key={key}
        >
          {label}
        </DropdownInnerOption>
      );

      if (!children || optRest.disabled) return option;
      const _attrs = {
        ...rest.attrs,
        className: getClassNames(rest.attrs?.className, `${rootClass}__nest`),
      };
      return (
        <Dropdown
          onSelect={(option, parents) => emit(option, [opt, ...parents])}
          viewport={() => document.body}
          placement={'right-start'}
          hideOnClick={hideOnClick}
          showArrow={showArrow}
          destroyOnHide={false}
          options={children}
          trigger="hover"
          appendTo={null}
          attrs={_attrs}
          size={size}
          offset={0}
          key={key}
        >
          {option}
        </Dropdown>
      );
    });
  }
  function isDivider(opt: DropdownOptionsItem): opt is DropdownDivider {
    return (opt as DropdownDivider).type === 'divider';
  }
};

Dropdown.displayName = 'Dropdown';
