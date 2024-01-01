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

const cls = getClasses('picker-col', ['option'], ['picked']);

export const PickerCol: React.FC<Props> = ({
  value: railValue,
  onPickOption,
  options,
}) => {
  const rootRef = useRef<HTMLUListElement>(null);
  const isFirstRef = useRef(true);

  // 初始化
  useEffect(() => {
    if (!isFirstRef.current) return;
    isFirstRef.current = false;

    if (railValue === undefined) return;
    const cb = () => (rootRef.current!.scrollTop = getScrollTop());
    const timer = setTimeout(cb, 0);
    return () => clearTimeout(timer);
  }, []);

  // 跟随
  useEffect(() => {
    if (isFirstRef.current) return;
    if (railValue === undefined) return;
    rootRef.current?.scrollTo({ top: getScrollTop(), behavior: 'smooth' });
  }, [options, railValue]);

  return (
    <ul className={cls.root} ref={rootRef}>
      {options.map((opt, index) => {
        const { attrs = {}, label, value, ...rest } = opt;
        return (
          <Option
            {...rest}
            attrs={{
              ...attrs,
              onClick(e) {
                attrs.onClick?.(e);
                e.stopPropagation();
                if (opt.disabled) return;
                onPickOption(opt, index, options);
              },
              className: getClassNames(attrs.className, cls.__.option, {
                [cls['--'].picked]: value === railValue,
              }),
            }}
            key={value}
            tag="li"
          >
            {label}
          </Option>
        );
      })}
    </ul>
  );

  function getScrollTop(): number {
    const root = rootRef.current;
    if (!root || railValue === undefined) return 0;

    const index = options.findIndex((opt) => opt.value === railValue);
    if (index === -1) return 0;

    const item = root.children[index] as HTMLElement;
    return item.offsetTop;
  }
};
