import React, { useEffect, Children, useState, useMemo, useRef } from 'react';
import type { VirtualListProps } from './virtual-list.types';
import { getClassNames, getSafeNum } from '@tool-pack/basic';
import { useForwardRef, getClasses } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';

const cls = getClasses('virtual-list', ['items', 'wrapper'], []);
const defaultProps = {
  tag: 'div',
} satisfies Partial<VirtualListProps>;

type Offsets = [start: number, end: number];

export const VirtualList: React.FC<VirtualListProps> = React.forwardRef<
  HTMLElement,
  VirtualListProps
>((props, ref) => {
  const {
    attrs = {},
    children,
    tag,
  } = props as RequiredPart<VirtualListProps, keyof typeof defaultProps>;
  const itemsElRef = useRef<HTMLDivElement>(null);
  const wrapperElRef = useRef<HTMLDivElement>(null);
  const rootElRef = useForwardRef(ref);

  const containerItemsLenRef = useRef(0);
  const translateYRef = useRef(0);
  const scrollHandlerLockerRef = useRef(false);
  const autoFillLayoutRef = useRef(true);
  const scrollTopRef = useRef(0);
  const [offsets, setOffsets] = useState<Offsets>([0, 0]);
  const childList = useMemo(() => Children.toArray(children), [children]);

  const _children = useMemo(() => {
    const [start, end] = offsets;
    return childList.slice(start, end);
  }, [childList, offsets]);

  useEffect(() => {
    if (!autoFillLayoutRef.current) return;
    const [start, end] = offsets;
    const len = childList.length;
    if (end >= childList.length) {
      autoFillLayoutRef.current = false;
      return;
    }
    const wrapperEL = itemsElRef.current;
    const itemsEl = itemsElRef.current;
    const rootEl = rootElRef.current;
    if (wrapperEL && itemsEl && rootEl) {
      const { offsetHeight } = itemsEl;
      if (offsetHeight > rootEl.offsetHeight) {
        const firstChild = itemsEl.children[0] as HTMLElement | null;
        if (firstChild) {
          wrapperEL.style.height =
            offsetHeight + (len - end) * firstChild.offsetHeight + 'px';
        }
        autoFillLayoutRef.current = false;
        return;
      }
    }
    containerItemsLenRef.current++;
    setOffsets([start, end + 1]);
  });

  useEffect(() => {
    scrollHandlerLockerRef.current = false;
  }, [offsets]);

  return React.createElement(
    tag,
    {
      ...attrs,
      className: getClassNames(cls.root, attrs.className),
      onScroll: _onScroll,
      ref: rootElRef,
    },
    <div className={cls.__.wrapper} ref={wrapperElRef}>
      <div
        style={{ transform: `translateY(${translateYRef.current}px)` }}
        className={cls.__.items}
        ref={itemsElRef}
      >
        {_children}
      </div>
    </div>,
  );

  function _onScroll(e: React.UIEvent<HTMLDivElement>) {
    if (scrollHandlerLockerRef.current) return;
    const target = e.currentTarget;
    const itemsEl = itemsElRef.current;

    if (!itemsEl) return;

    const children = itemsEl.children;
    if (!children || !children.length) return;

    const { scrollTop } = target;

    const direct = scrollTop > scrollTopRef.current ? 'bottom' : 'top';
    scrollTopRef.current = scrollTop;

    let [start, end] = offsets;
    const firstChild = children[0] as HTMLElement;
    const lastChild = children[children.length - 1] as HTMLElement;
    console.log(direct, scrollTop);

    if (direct === 'top') {
      if (start > 0 && isScrollOnTopOfFirstChild(firstChild)) {
        start--;
      }
      if (isScrollOnTopOfLastChild(lastChild)) {
        end--;
      }
      setSafeOffsets(start, end, firstChild);
      return;
    }

    /* ---- direct === 'bottom' ---- */

    if (isScrollAtBottomOfFirstChild(firstChild)) {
      start++;
    }
    if (isScrollAtBottomOfLastChild(lastChild)) {
      end++;
    }
    setSafeOffsets(start, end, firstChild);
  }
  function isScrollOnTopOfFirstChild(firstChild: HTMLElement): boolean {
    return scrollTopRef.current < firstChild.offsetTop + translateYRef.current;
  }
  function isScrollAtBottomOfFirstChild(firstChild: HTMLElement): boolean {
    return (
      scrollTopRef.current >
      firstChild.offsetHeight + firstChild.offsetTop + translateYRef.current
    );
  }
  function isScrollAtBottomOfLastChild(lastChild: HTMLElement): boolean {
    return (
      scrollTopRef.current + (rootElRef.current?.offsetHeight || 0) >
      lastChild.offsetHeight + lastChild.offsetTop + translateYRef.current
    );
  }
  function isScrollOnTopOfLastChild(lastChild: HTMLElement): boolean {
    return (
      scrollTopRef.current + (rootElRef.current?.offsetHeight || 0) <
      lastChild.offsetTop + translateYRef.current
    );
  }
  function setSafeOffsets(
    start: number,
    end: number,
    firstChild: HTMLElement,
  ): void {
    const maxIndex = childList.length;
    start = getSafeNum(start, 0, maxIndex);
    end = getSafeNum(end, 0, maxIndex);

    const [_start, _end] = offsets;

    if (end - start < containerItemsLenRef.current) return;
    if (start === _start && end === _end) return;

    if (start !== _start) {
      translateYRef.current +=
        firstChild.offsetHeight * (start > _start ? 1 : -1);
    }

    scrollHandlerLockerRef.current = true;
    setOffsets([start, end]);
  }
});

VirtualList.defaultProps = defaultProps;
VirtualList.displayName = 'VirtualList';
