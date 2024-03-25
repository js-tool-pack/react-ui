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
  binaryFindIndex,
  getClassNames,
  forEachNum,
  getSafeNum,
  forEach,
  inRange,
} from '@tool-pack/basic';
import { useForwardRef, getClasses, useWatch } from '@pkg/shared';
import type { VirtualListProps } from './virtual-list.types';
import type { RequiredPart } from '@tool-pack/types';

const cls = getClasses('virtual-list', ['items', 'wrapper', 'item'], []);
const defaultProps = {
  tag: 'div',
} satisfies Partial<VirtualListProps>;

type Offsets = [start: number, end: number];
const offsetIndex = 2;

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
    Array<{ /*isPreset: boolean;*/ height: number; top: number }>
  >([]);
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

  useWatch(childList.length, (len) => {
    const old = autoFillLayoutRef.current;
    autoFillLayoutRef.current = true;
    if (old || !itemMapRef.current.length || len >= itemMapRef.current.length)
      return;

    // 从 children 数量多到 children 数量少的情况
    itemMapRef.current.length = 0;
    // rootElRef.current?.dispatchEvent(new Event('scroll'));
    setSafeOffsets(0, 0);
  });

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
                // isPreset: false,
                top: offsetTop,
              };
            },
          );

          const unRenderStart = len - end;
          const height = unRenderStart * firstItemHeightRef.current;
          const defObj = { height: 0, top: 0 };
          forEachNum(unRenderStart, (i) => {
            const index = end + i;
            const prev = itemMapRef.current[index - 1] || defObj;
            itemMapRef.current[index] = {
              height: firstItemHeightRef.current,
              top: prev.height + prev.top,
              // isPreset: true,
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
    const itemMap = itemMapRef.current;

    let isResized = false;
    let lastIndex = 0;
    const defItem = { height: 0, top: 0 };
    forEach(childs as HTMLCollectionOf<HTMLElement>, (el) => {
      const attr = el.getAttribute('data-index');
      const index = Number(attr);
      const obj = itemMap[index];
      // if (obj?.isPreset === false) return;
      const prev = itemMap[index - 1] || defItem;
      const h = obj?.height || firstItemHeightRef.current;
      const { offsetHeight } = el;
      itemMap[index] = {
        top: prev.top + prev.height,
        height: offsetHeight,
        // isPreset: false,
      };
      if (h !== offsetHeight) {
        isResized = true;
        lastIndex = index;
      }
    });

    // 如果某一个元素高度变化了，就需要把它后面的元素的 top 刷新一遍
    if (isResized) {
      const len = itemMap.length;
      for (let i = lastIndex + 1; i < len; i++) {
        const v = itemMap[i]!;
        // 更新后续的 top
        const prev = itemMap[i - 1] || defItem;
        v.top = prev.top + prev.height;
      }
      const endItem = itemMap.at(-1) || defItem;
      wrapperEL.style.height = endItem.top + endItem.height + 'px';
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

    const { offsetHeight, scrollTop } = target;

    scrollTopRef.current = scrollTop;

    const newOffsets = getOffsets(scrollTop, offsetHeight);
    setSafeOffsets(...newOffsets);
  }
  function getOffsets(scrollTop: number, parentHeight: number): Offsets {
    const map = itemMapRef.current;
    const len = map.length;
    const start = binaryFindIndex(map, ({ item }) => {
      if (inRange(scrollTop, [item.top, item.top + item.height])) return 0;
      return scrollTop - item.top;
    });
    const offsets: Offsets = [start, len];
    const bottom = scrollTop + parentHeight;
    for (let i = offsets[0]; i < len; i++) {
      const item = map[i];
      if (!item) continue;
      if (item.top >= bottom) {
        offsets[1] = i;
        break;
      }
    }

    offsets[0] -= offsetIndex;
    offsets[1] += offsetIndex;
    return offsets;
  }
  function setSafeOffsets(start: number, end: number): void {
    const maxIndex = childList.length;
    start = getSafeNum(start, 0, maxIndex);
    end = getSafeNum(end, 0, maxIndex);

    const im = itemMapRef.current[start];
    if (im) translateYRef.current = im.top;

    setOffsets([start, end]);
  }
});

VirtualList.defaultProps = defaultProps;
VirtualList.displayName = 'VirtualList';
