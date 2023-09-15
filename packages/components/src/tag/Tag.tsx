import { getSizeClassName, getClasses, useVisible } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';
import { type ButtonProps, Button } from '~/button';
import { getClassNames } from '@tool-pack/basic';
import type { TagProps } from './tag.types';
import React, { useState } from 'react';
import { Close } from '@pkg/icons';
import { Icon } from '~/icon';

const cls = getClasses(
  'tag',
  ['content', 'close', 'icon'],
  ['bordered', 'checked', 'round', 'checkable', 'disabled'],
);
const defaultProps = {
  type: 'primary',
  size: 'medium',
  bordered: true,
} satisfies Partial<TagProps>;

export const Tag: React.FC<TagProps> = React.forwardRef<
  HTMLDivElement,
  TagProps
>((props, ref) => {
  const {
    checked: outerChecked,
    closeBtnAttrs = {},
    attrs = {},
    closeable,
    checkable,
    disabled,
    onChange,
    bordered,
    children,
    onClose,
    round,
    type,
    icon,
    size,
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
      className={handleClassName()}
      onClick={handleChange}
      ref={ref}
    >
      {icon && <Icon className={cls.__.icon}>{icon}</Icon>}
      <span className={cls.__.content}>{children}</span>
      {closeable && (
        <Button
          attrs={{ ...closeBtnAttrs, onClickCapture: handleClose }}
          className={cls.__.close}
          type={closeBtnType}
          size="small"
          plain="text"
        >
          <Icon>
            <Close />
          </Icon>
        </Button>
      )}
    </div>
  );

  function handleClassName() {
    return getClassNames(cls.root, attrs?.className, getSizeClassName(size), {
      [cls['--'].checkable]: checkable,
      [`${cls.root}--${type}`]: type,
      [cls['--'].bordered]: bordered,
      [cls['--'].disabled]: disabled,
      [cls['--'].checked]: checked,
      [cls['--'].round]: round,
    });
  }
  function handleClose(e: React.MouseEvent<HTMLButtonElement>) {
    closeBtnAttrs.onClickCapture?.(e);
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
