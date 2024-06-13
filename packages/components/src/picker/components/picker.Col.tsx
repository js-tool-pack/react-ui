import { debounceTime, fromEvent, timer, race, take, tap } from 'rxjs';
import { OptionValueType, getClasses } from '@pkg/shared';
import { getClassNames, emptyFn } from '@tool-pack/basic';
import React, { useEffect, useRef } from 'react';
import type { PickerOption } from '~/picker';
import { Option } from '~/option';

interface Props {
  onPickOption: (
    option: PickerOption,
    index: number,
    options: PickerOption[],
  ) => void;
  options: PickerOption[];
  value?: OptionValueType;
}

const cls = getClasses('picker-col', ['option', 'list', 'item'], ['picked']);

export const PickerCol: React.FC<Props> = ({
  value: colValue,
  onPickOption,
  options,
}) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const isFirstRef = useRef(true);

  // 跟随
  useEffect(() => {
    if (isFirstRef.current) return;
    if (colValue === undefined) return;

    const clear = changeOverflow((ul) =>
      ul.scrollTo({ top: getScrollTop(), behavior: 'smooth' }),
    );

    const sub = race(
      fromEvent(ulRef.current!, 'scroll').pipe(debounceTime(50)),
      timer(1000),
    )
      .pipe(tap(clear), take(1))
      .subscribe();

    return () => {
      clear();
      sub.unsubscribe();
    };
  }, [options, colValue]);

  // 初始化
  useEffect(() => {
    if (!isFirstRef.current) return;
    isFirstRef.current = false;

    if (colValue === undefined) return;
    const cb = () => changeOverflow((ul) => (ul.scrollTop = getScrollTop()))();
    const timer = setTimeout(cb, 0);
    return () => {
      clearTimeout(timer);
      // 在 react 的严格模式调用 2 次时还原
      isFirstRef.current = true;
    };
  }, []);

  return (
    <div className={cls.root}>
      <ul className={cls.__.list} ref={ulRef}>
        {options.map((opt, index) => {
          const { attrs = {}, label, value, ...rest } = opt;
          return (
            <li className={cls.__.item} key={value}>
              <Option
                {...rest}
                attrs={{
                  ...attrs,
                  onClick(e) {
                    attrs.onClick?.(e);
                    // e.stopPropagation();
                    if (opt.disabled) return;
                    onPickOption(opt, index, options);
                  },
                  className: getClassNames(attrs.className, cls.__.option, {
                    [cls['--'].picked]: value === colValue,
                  }),
                }}
              >
                {label}
              </Option>
            </li>
          );
        })}
      </ul>
    </div>
  );

  function changeOverflow(cb: (ul: HTMLUListElement) => void): () => void {
    const ul = ulRef.current;
    if (!ul) return emptyFn;

    const overflow = ul.style.overflow;
    ul.style.overflow = 'auto';
    cb(ul);
    return () => (ul.style.overflow = overflow);
  }
  function getScrollTop(): number {
    const root = ulRef.current;
    if (!root || colValue === undefined) return 0;

    const index = options.findIndex((opt) => opt.value === colValue);
    if (index === -1) return 0;

    const item = root.children[index] as HTMLElement;
    return item.offsetTop;
  }
};
