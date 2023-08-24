import React, { useState } from 'react';
import type { TagProps } from './tag.types';
import { getClasses, getSizeClassName, useVisible } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { getClassNames } from '@tool-pack/basic';
import { Button, type ButtonProps } from '~/button';
import { Close } from '@pkg/icons';
import { Icon } from '~/icon';

const cls = getClasses(
  'tag',
  ['content', 'close', 'icon'],
  ['bordered', 'checked', 'round', 'checkable', 'disabled'],
);
const defaultProps = {
  size: 'medium',
  type: 'primary',
  bordered: true,
} satisfies Partial<TagProps>;

export const Tag: React.FC<TagProps> = React.forwardRef<
  HTMLDivElement,
  TagProps
>((props, ref) => {
  const {
    type,
    icon,
    size,
    attrs = {},
    round,
    onClose,
    closeable,
    checked: outerChecked,
    disabled,
    checkable,
    onChange,
    bordered,
    children,
  } = props as RequiredPart<TagProps, keyof typeof defaultProps>;

  const [closed, setClosed] = useState(false);
  const [checked, , setChecked] = useVisible(outerChecked);

  if (closed) return <></>;

  const closeBtnType: ButtonProps['type'] = type
    ? type === 'error'
      ? 'danger'
      : type
    : 'primary';

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      {...attrs}
      ref={ref}
      onClick={handleChange}
      className={handleClassName()}>
      {icon && <Icon className={cls.__.icon}>{icon}</Icon>}
      <span className={cls.__.content}>{children}</span>
      {closeable && (
        <Button
          className={cls.__.close}
          type={closeBtnType}
          size="small"
          plain="text"
          onClick={handleClose}>
          <Icon>
            <Close />
          </Icon>
        </Button>
      )}
    </div>
  );

  function handleClassName() {
    return getClassNames(cls.root, attrs?.className, getSizeClassName(size), {
      [`${cls.root}--${type}`]: type,
      [cls['--'].round]: round,
      [cls['--'].bordered]: bordered,
      [cls['--'].disabled]: disabled,
      [cls['--'].checkable]: checkable,
      [cls['--'].checked]: checked,
    });
  }
  function handleClose(e: React.MouseEvent<HTMLButtonElement>) {
    if (disabled || !closeable) return;
    onClose?.(e);
    if (e.isDefaultPrevented()) return;
    setClosed(true);
    e.stopPropagation();
  }
  function handleChange(e: React.MouseEvent<HTMLDivElement>) {
    attrs.onClick?.(e);
    if (disabled || !checkable || e.isDefaultPrevented()) return;
    const value = !checked;
    setChecked(value);
    onChange?.(value);
  }
});

Tag.defaultProps = defaultProps;
Tag.displayName = 'Tag';
