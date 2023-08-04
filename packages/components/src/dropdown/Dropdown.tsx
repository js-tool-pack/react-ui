import React, { useEffect, useRef, useState } from 'react';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import type {
  DropdownDivider,
  DropdownOptionsItem,
  DropdownProps,
} from './dropdown.types';
import { Popover } from '~/popover';
import { Option } from '~/option';
import { getComponentClass } from '@pkg/shared';
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
    className,
    showArrow,
    onSelect,
    options,
    visible,
    hideOnClick,
    ...rest
  } = props as RequiredPart<DropdownProps, keyof typeof defaultProps>;
  const boxRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState<boolean | undefined>();

  useEffect(() => {
    show !== undefined && setShow(undefined);
  }, [show]);
  useEffect(() => {
    setShow(visible);
  }, [visible]);

  const name = 'dropdown';
  const rootClass = getComponentClass(name);

  const handleOptions = (
    options: DropdownOptionsItem[] = [],
    parents: DropdownOption[] = [],
  ): React.ReactElement[] => {
    return options.map((opt) => {
      if (isDivider(opt)) {
        const { key, type: _type, tag = 'li', className, ...rest } = opt;
        return (
          <Divider
            {...rest}
            tag={tag}
            className={getClassNames(className, `${rootClass}__divider`)}
            key={key}
          />
        );
      }
      const { type, label, key, tag, children, ...rest } = opt;

      if (type === 'group') {
        return (
          <li className={`${rootClass}__group`} key={key}>
            <Option
              {...rest}
              tag="div"
              role={'heading'}
              size={size}
              className={`${rootClass}__group-title`}
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
        e.stopPropagation();
        if (opt.disabled || opt.type === 'group') return;
        emit(opt, parents);
      };
      const option = (
        <Option
          {...rest}
          tag={tag || 'li'}
          key={key}
          size={size}
          expandable={children && !!children.length}
          onClick={onClick}>
          {label}
        </Option>
      );

      if (!children || rest.disabled) return option;
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
          className={`${rootClass}__nest`}
          destroyOnHide={false}>
          {option}
        </Dropdown>
      );
    });
  };

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
      className={getClassNames(className)}
      content={Box}>
      {children}
    </Popover>
  );
};

Dropdown.defaultProps = defaultProps;
Dropdown.displayName = 'Dropdown';

function isDivider(opt: DropdownOptionsItem): opt is DropdownDivider {
  return (opt as DropdownDivider).type === 'divider';
}
