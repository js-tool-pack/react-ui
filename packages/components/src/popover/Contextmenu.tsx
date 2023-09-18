import { getComponentClass, useForceUpdate, useNextEffect } from '@pkg/shared';
import type { PopoverProps } from './popover.types';
import { getClassNames } from '@tool-pack/basic';
import { createPortal } from 'react-dom';
import React, { useRef } from 'react';
import { Popover } from './Popover';

const rootClass = getComponentClass('popover');

export const Contextmenu: React.FC<PopoverProps> = (props) => {
  const { onVisibleChange, trigger: _, children, ...rest } = props;
  const triggerRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef(false);
  const nextEffect = useNextEffect();
  const forceUpdate = useForceUpdate();

  return (
    <>
      {React.cloneElement(
        children,
        { onContextMenuCapture },
        children.props.children,
      )}
      {createPortal(
        <Popover {...rest} onVisibleChange={_onVisibleChange} trigger="click">
          <div
            className={getClassNames(
              `${rootClass}__contextmenu_trigger`,
              rest.attrs?.className,
            )}
            ref={triggerRef}
          ></div>
        </Popover>,
        document.body,
      )}
    </>
  );

  function onContextMenuCapture(e: React.MouseEvent<HTMLElement>): void {
    const el = triggerRef.current;
    if (!el) return;
    e.stopPropagation();
    e.preventDefault();

    el.style.left = e.clientX + 'px';
    el.style.top = e.clientY + 'px';

    forceUpdate();
    nextEffect(() => {
      !visibleRef.current && el.click();
    });
  }
  function _onVisibleChange(visible: boolean): void {
    onVisibleChange?.(visible);
    visibleRef.current = visible;
  }
};

Contextmenu.displayName = 'PopoverContextmenu';
