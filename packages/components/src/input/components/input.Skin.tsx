import { getSizeClassName, getClasses, PropsBase, Size } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import React from 'react';

export interface InputSkinProps extends PropsBase<HTMLLabelElement> {
  status?: 'warning' | 'error';
  disabled?: boolean;
  active?: boolean;
  size?: Size;
}

const cls = getClasses('input-skin', [], ['active', 'disabled']);

export const InputSkin: React.FC<InputSkinProps> = React.forwardRef<
  HTMLLabelElement,
  InputSkinProps
>(
  (
    { size = 'medium', attrs = {}, disabled, children, active, status },
    ref,
  ) => {
    const className = getClassNames(
      cls.root,
      attrs.className,
      getSizeClassName(size),
      {
        [`${cls.root}--${status}`]: status !== undefined,
        [cls['--'].disabled]: disabled,
        [cls['--'].active]: active,
      },
    );
    return (
      <label
        {...attrs}
        onClickCapture={handleClick}
        className={className}
        ref={ref}
      >
        {children}
      </label>
    );

    function handleClick(e: React.PointerEvent<HTMLLabelElement>): void {
      // label 包含 input 时，点击 label 会再次触发 input 的点击事件，导致二次点击
      // 对所有的其他UIEvent 对象，UIEvent.detail 总是零。
      // https://developer.mozilla.org/zh-CN/docs/Web/API/UIEvent/detail
      // react 测试环境中 detail 是反过来的
      if (isTestEnv() ? e.detail !== 0 : e.detail === 0) e.stopPropagation();
      attrs.onClickCapture?.(e);
    }
    function isTestEnv(): boolean {
      return process.env.NODE_ENV === 'test';
    }
  },
);
