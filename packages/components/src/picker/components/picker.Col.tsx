import { OptionValueType, getClasses } from '@pkg/shared';
import { getClassNames } from '@tool-pack/basic';
import type { PickerOption } from '~/picker';
import { useEffect, useRef } from 'react';
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
  value: railValue,
  onPickOption,
  options,
}) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const isFirstRef = useRef(true);

  // 跟随
  useEffect(() => {
    if (isFirstRef.current) return;
    if (railValue === undefined) return;
    ulRef.current?.scrollTo({ top: getScrollTop(), behavior: 'smooth' });
  }, [options, railValue]);

  // 初始化
  useEffect(() => {
    if (!isFirstRef.current) return;
    isFirstRef.current = false;

    if (railValue === undefined) return;
    const cb = () => (ulRef.current!.scrollTop = getScrollTop());
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
                    [cls['--'].picked]: value === railValue,
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

  function getScrollTop(): number {
    const root = ulRef.current;
    if (!root || railValue === undefined) return 0;

    const index = options.findIndex((opt) => opt.value === railValue);
    if (index === -1) return 0;

    const item = root.children[index] as HTMLElement;
    return item.offsetTop;
  }
};
