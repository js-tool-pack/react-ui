import React, { useRef } from 'react';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import type {
  DropdownDivider,
  DropdownOptionsItem,
  DropdownProps,
} from './dropdown.types';
import { Popover } from '~/popover';
import { Option } from '~/option';
import { getComponentClass, useStateWithTrailClear } from '@pkg/shared';
import { Divider } from '~/divider';
import { DropdownOption } from './dropdown.types';

const defaultProps = {
  placement: 'bottom-start',
  size: 'medium',
  showArrow: false,
  hideOnClick: true,
} satisfies Partial<DropdownProps>;

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const {
    children,
    header,
    footer,
    size,
    showArrow,
    onSelect,
    options,
    visible,
    hideOnClick,
    ...rest
  } = props as RequiredPart<DropdownProps, keyof typeof defaultProps>;
  const boxRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useStateWithTrailClear(visible);

  const name = 'dropdown';
  const rootClass = getComponentClass(name);

  const Box = (
    <>
      {header && <div className={`${rootClass}__header`}>{header}</div>}
      <div ref={boxRef} className={`${rootClass}__body`}>
        <ul className={`${rootClass}__options`}>{handleOptions(options)}</ul>
      </div>
      {footer && <div className={`${rootClass}__footer`}>{footer}</div>}
    </>
  );

  return (
    <Popover
      {...rest}
      name={name}
      showArrow={showArrow}
      visible={show}
      content={Box}>
      {children}
    </Popover>
  );

  function handleOptions(
    options: DropdownOptionsItem[] = [],
    parents: DropdownOption[] = [],
  ): React.ReactElement[] {
    return options.map((opt) => {
      if (isDivider(opt)) {
        const { key, type: _type, tag = 'li', ...rest } = opt;
        rest.attrs ||= {};
        rest.attrs.className = getClassNames(
          rest.attrs.className,
          `${rootClass}__divider`,
        );
        return <Divider {...rest} tag={tag} key={key} />;
      }
      const {
        type,
        label,
        key,
        tag,
        children,
        attrs: optAttrs = {},
        ...optRest
      } = opt;

      if (type === 'group') {
        return (
          <li className={`${rootClass}__group`} key={key}>
            <Option
              {...optRest}
              tag="div"
              attrs={{
                role: 'heading',
                className: `${rootClass}__group-title`,
              }}
              size={size}
              readonly>
              {label}
            </Option>
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
        <Option
          {...optRest}
          tag={tag || 'li'}
          key={key}
          size={size}
          expandable={children && !!children.length}
          attrs={{ ...optAttrs, onClick }}>
          {label}
        </Option>
      );

      if (!children || optRest.disabled) return option;
      const _attrs = {
        ...rest.attrs,
        className: getClassNames(rest.attrs?.className, `${rootClass}__nest`),
      };
      return (
        <Dropdown
          placement={'right-start'}
          key={key}
          size={size}
          trigger="hover"
          appendTo={null}
          showArrow={showArrow}
          hideOnClick={hideOnClick}
          offset={0}
          onSelect={(option, parents) => emit(option, [opt, ...parents])}
          viewport={() => document.body}
          options={children}
          attrs={_attrs}
          destroyOnHide={false}>
          {option}
        </Dropdown>
      );
    });
  }
  function isDivider(opt: DropdownOptionsItem): opt is DropdownDivider {
    return (opt as DropdownDivider).type === 'divider';
  }
};

Dropdown.defaultProps = defaultProps;
Dropdown.displayName = 'Dropdown';
