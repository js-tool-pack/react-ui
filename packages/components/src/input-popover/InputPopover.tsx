import {
  useEventListenerOnMounted,
  mergeReactDefaultProps,
  VisibleController,
  useForwardRef,
  getClasses,
  useWatch,
} from '@pkg/shared';
import type { InputPopoverProps } from './input-popover.types';
import React, { useEffect, useState, useRef } from 'react';
import { filter as rxFilter, fromEvent } from 'rxjs';
import { transitionCBAdapter } from '~/transition';
import { getClassNames } from '@tool-pack/basic';
import { InputSkin } from '~/input/components';
import { useEsc } from '~/dialog/dialog.hooks';
import { TabTrigger } from './components';
import { Popover } from '~/popover';

const defaultProps = {} satisfies Partial<InputPopoverProps>;
const cls = getClasses('input-popover', [], []);

export const InputPopover = React.forwardRef<
  HTMLLabelElement,
  InputPopoverProps
>((props, ref) => {
  const {
    popoverProps = {},
    onVisibleChange,
    tabTriggerRef,
    attrs = {},
    children,
    disabled,
    visible,
    onFocus,
    onBlur,
    active,
    status,
    size,
  } = mergeReactDefaultProps(props, defaultProps);
  // 当点击触发元素或窗体时，禁止触发 blur
  const skipBlurRef = useRef(false);
  const _tabTriggerRef = useForwardRef(tabTriggerRef);
  const [opened, setOpened] = useState(false);
  const [focused, setFocused] = useState<boolean>();
  const visibleControllerRef = useForwardRef<VisibleController>(
    popoverProps.visibleControllerRef,
  );

  useWatch(visible, (v) => !v && (skipBlurRef.current = true));

  // 页面 blur
  useEventListenerOnMounted(
    window,
    'blur',
    close,
    undefined,
    // active,
    false,
  );

  useEffect(() => {
    if (!opened) return;

    // 监听 tab 键
    const sub$ = fromEvent<KeyboardEvent>(window, 'keydown')
      .pipe(rxFilter((e) => e.code === 'Tab'))
      .subscribe(close);

    return () => sub$.unsubscribe();
  }, [opened]);

  useEffect(() => {
    if (focused === undefined) return;
    if (focused) onFocus?.();
    else onBlur?.();
  }, [focused]);

  useEsc(opened, true, closeWithFocus);

  const popoverOn = transitionCBAdapter({
    onAfterLeave() {
      if (skipBlurRef.current) {
        _tabTriggerRef.current?.focus();
        skipBlurRef.current = false;
      } else {
        setFocused(false);
      }
    },
    onBeforeEnter: () => {
      setOpened(true);
      onVisibleChange?.(true);
      setFocused(true);
    },
    onBeforeLeave: () => {
      setOpened(false);
      onVisibleChange?.(false);
    },
  });

  return (
    <Popover
      {...popoverProps}
      on={(...args) => (popoverOn(...args), popoverProps.on?.(...args))}
      widthByTrigger={popoverProps.widthByTrigger ?? true}
      placement={popoverProps.placement || 'bottom'}
      disabled={popoverProps.disabled ?? disabled}
      visibleControllerRef={visibleControllerRef}
      trigger={popoverProps.trigger ?? 'click'}
      visible={visible}
    >
      <InputSkin
        attrs={{
          ...attrs,
          className: getClassNames(attrs.className, cls.root),
          onClick: handleClickRoot,
        }}
        active={!disabled && (active || opened || focused)}
        disabled={disabled}
        status={status}
        size={size}
        ref={ref}
      >
        <TabTrigger
          ref={_tabTriggerRef}
          disabled={disabled}
          onFocus={_onFocus}
          onBlur={_onBlur}
          opened={opened}
          onOpen={open}
        />
        {children}
      </InputSkin>
    </Popover>
  );

  function _onFocus(): void {
    setFocused(true);
  }
  function _onBlur(): void {
    if (opened || skipBlurRef.current) return;
    setFocused(false);
  }
  function close(): void {
    setOpened(false);
    visibleControllerRef.current?.hide();
  }
  function open(): void {
    setOpened(true);
    visibleControllerRef.current?.show();
  }
  function closeWithFocus(): void {
    skipBlurRef.current = true;
    close();
  }
  function handleClickRoot(e: React.MouseEvent<HTMLLabelElement>): void {
    attrs.onClick?.(e);
    if (disabled || !opened) return;
    skipBlurRef.current = true;
  }
});

InputPopover.displayName = 'InputPopover';
