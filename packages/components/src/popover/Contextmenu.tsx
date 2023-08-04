import React, { useRef } from 'react';
import { getClassNames, nextTick } from '@tool-pack/basic';
import { getComponentClass, useForceUpdate } from '@pkg/shared';
import type { PopoverProps } from './popover.types';
import { Popover } from './Popover';
import { createPortal } from 'react-dom';

const rootClass = getComponentClass('popover');

export const Contextmenu: React.FC<PopoverProps> = (props) => {
  const { children, trigger: _, ...rest } = props;
  const triggerRef = useRef<HTMLElement>(null);
  const forceUpdate = useForceUpdate();

  const onContextMenuCapture = (e: React.MouseEvent<HTMLElement>) => {
    const el = triggerRef.current;
    if (!el) return;
    e.stopPropagation();
    e.preventDefault();

    el.style.left = e.clientX + 'px';
    el.style.top = e.clientY + 'px';

    forceUpdate();
    nextTick(() => {
      el.click();
    });
  };

  return (
    <>
      {React.cloneElement(
        children,
        { onContextMenuCapture },
        children.props.children,
      )}
      {createPortal(
        <Popover {...rest} trigger="click" childrenRef={triggerRef}>
          <div
            className={getClassNames(
              `${rootClass}__contextmenu_trigger`,
              rest.className,
            )}></div>
        </Popover>,
        document.body,
      )}
    </>
  );
};

Contextmenu.displayName = 'PopoverContextmenu';
