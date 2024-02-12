import React, {
  HTMLAttributes,
  createElement,
  useEffect,
  Children,
  useState,
  useMemo,
  useRef,
} from 'react';
import {
  getClassNames,
  forEachNum,
  getSafeNum,
  forEach,
} from '@tool-pack/basic';
import type { VirtualListProps } from './virtual-list.types';
import { useForwardRef, getClasses } from '@pkg/shared';
import type { RequiredPart } from '@tool-pack/types';

const cls = getClasses('virtual-list', ['items', 'wrapper', 'item'], []);
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

  const firstItemHeightRef = useRef(0);
  const itemMapRef = useRef<
    Record<number, { isPreset: boolean; height: number; top: number }>
  >({});
  const containerItemsLenRef = useRef(0);
  const translateYRef = useRef(0);
  const autoFillLayoutRef = useRef(true);
  const scrollTopRef = useRef(0);
  const [offsets, setOffsets] = useState<Offsets>([0, 0]);
  const childList = useMemo(() => Children.toArray(children), [children]);

  const _children = useMemo(() => {
    const [start, end] = offsets;
    return childList.slice(start, end).map((child, i) => {
      const index = start + i;
      // 在此处创建会重复，最好提供个额外组件给外部使用
      return createElement(
        'div',
        {
          className: cls.__.item,
          'data-index': index, // 为元素添加一个 index 标记
          key: index,
        } as HTMLAttributes<HTMLElement>,
        child,
      );
    });
  }, [childList, offsets]);

  useEffect(() => {
    if (!autoFillLayoutRef.current) return;
    const [start, end] = offsets;
    const len = childList.length;
    if (end >= childList.length) {
      autoFillLayoutRef.current = false;
      return;
    }
    const wrapperEL = wrapperElRef.current;
    const itemsEl = itemsElRef.current;
    const rootEl = rootElRef.current;
    if (wrapperEL && itemsEl && rootEl) {
      const { offsetHeight } = itemsEl;
      if (offsetHeight > rootEl.offsetHeight) {
        const firstChild = itemsEl.children[0] as HTMLElement | null;
        if (firstChild) {
          firstItemHeightRef.current = firstChild.offsetHeight;
          forEach(
            itemsEl.children as unknown as ArrayLike<HTMLElement>,
            (v, i) => {
              const { offsetHeight, offsetTop } = v;
              itemMapRef.current[i] = {
                height: offsetHeight,
                isPreset: false,
                top: offsetTop,
              };
            },
          );

          const unRenderStart = len - end;
          const height = unRenderStart * firstItemHeightRef.current;
          const defObj = { height: 0, top: 0 };
          forEachNum(len - unRenderStart + 1, (i) => {
            const index = i + unRenderStart - 1;
            const prev = itemMapRef.current[index - 1] || defObj;
            itemMapRef.current[index] = {
              height: firstItemHeightRef.current,
              top: prev.height + prev.top,
              isPreset: true,
            };
          });

          wrapperEL.style.height = height + offsetHeight + 'px';
        }
        autoFillLayoutRef.current = false;
        return;
      }
    }
    containerItemsLenRef.current++;
    setOffsets([start, end + 1]);
  });

  useEffect(() => {
    if (autoFillLayoutRef.current) return;

    const wrapperEL = wrapperElRef.current;
    const itemsEl = itemsElRef.current;
    if (!wrapperEL || !itemsEl) return;

    const childs = itemsEl.children;
    const wrapperElHeight = wrapperEL.offsetHeight;
    const len = itemsEl.children.length;

    const itemHeightMap = itemMapRef.current;

    for (let i = 0; i < len; i++) {
      const el = childs[i] as HTMLElement | null;
      if (!el) continue;
      const attr = el.getAttribute('data-index');
      const index = Number(attr);
      const obj = itemHeightMap[index];
      if (obj?.isPreset === false) continue;
      const h = firstItemHeightRef.current;
      const { offsetHeight, offsetTop } = el;
      itemHeightMap[index] = {
        top: offsetTop + translateYRef.current,
        height: offsetHeight,
        isPreset: false,
      };
      if (h !== offsetHeight) {
        const offset = offsetHeight - h;
        const height = wrapperElHeight + offset;
        wrapperEL.style.height = height + 'px';
      }
    }
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

    if (scrollTop === 0) translateYRef.current = 0;

    if (direct === 'top') {
      if (start > 0 && isScrollOnTopOfFirstChild(firstChild)) {
        start--;
      }
      if (isScrollOnTopOfLastChild(lastChild)) {
        end--;
      }
      setSafeOffsets(start, end);
      return;
    }

    /* ---- direct === 'bottom' ---- */

    if (isScrollAtBottomOfFirstChild(firstChild)) {
      start++;
    }
    if (isScrollAtBottomOfLastChild(lastChild)) {
      end++;
    }
    setSafeOffsets(start, end);
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
  function setSafeOffsets(start: number, end: number): void {
    const maxIndex = childList.length;
    start = getSafeNum(start, 0, maxIndex);
    end = getSafeNum(end, 0, maxIndex);

    const [_start, _end] = offsets;

    if (end - start < containerItemsLenRef.current) return;
    if (start === _start && end === _end) return;

    if (start !== _start) {
      translateYRef.current = itemMapRef.current[start]!.top;
    }

    setOffsets([start, end]);
  }
});

VirtualList.defaultProps = defaultProps;
VirtualList.displayName = 'VirtualList';
