import { getComponentClass, useForceUpdate } from '@pkg/shared';
import { getClassNames, nextTick } from '@tool-pack/basic';
import type { PopoverProps } from './popover.types';
import { createPortal } from 'react-dom';
import React, { useRef } from 'react';
import { Popover } from './Popover';

const rootClass = getComponentClass('popover');

export const Contextmenu: React.FC<PopoverProps> = (props) => {
  const { trigger: _, children, ...rest } = props;
  const triggerRef = useRef<HTMLDivElement>(null);
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
        <Popover {...rest} trigger="click">
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
};

Contextmenu.displayName = 'PopoverContextmenu';
