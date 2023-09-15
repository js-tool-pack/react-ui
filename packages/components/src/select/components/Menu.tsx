import {
  SelectOptionGroup,
  SelectOptionsItem,
  SelectDivider,
  SelectOption,
  SelectProps,
} from '../select.types';
import { flattenOptions, isDivider, intoView, isGroup } from '~/select/utils';
import { useForceUpdate, useNextEffect, getClasses } from '@pkg/shared';
import { MenuEmpty } from '~/select/components/Menu.empty';
import { MenuOption, optionCls } from './Menu.option';
import { ConvertOptional } from '@tool-pack/types';
import React, { useEffect, useRef } from 'react';
import { getClassNames } from '@tool-pack/basic';
import { fromEvent, filter } from 'rxjs';
import { Divider } from '~/divider';

interface Props
  extends ConvertOptional<
    Pick<
      SelectProps,
      'onSelect' | 'multiple' | 'options' | 'footer' | 'header' | 'empty'
    >
  > {
  onSelectedChange: (selected: SelectOption[]) => void;
  selected: SelectOption[];
  active: boolean;
}

const cls = getClasses(
  'select-menu',
  [
    'header',
    'body',
    'footer',
    'options',
    'divider',
    'group',
    'group-title',
    'group-body',
  ],
  [],
);
export const Menu: React.FC<Props> = (props) => {
  const {
    onSelectedChange,
    multiple,
    onSelect,
    selected,
    options,
    footer,
    header,
    active,
    empty,
  } = props;
  const forceUpdate = useForceUpdate();
  const boxRef = useRef<HTMLDivElement>(null);
  const activeOptionRef = useRef<SelectOption | undefined>();
  const nextEffect = useNextEffect();

  // 方向键移动光标
  useEffect(() => {
    if (!active) return;
    const keydown$ = fromEvent<KeyboardEvent>(window, 'keydown')
      .pipe(filter((e) => ['ArrowDown', 'ArrowUp', 'Enter'].includes(e.code)))
      .subscribe((e) => {
        e.preventDefault();
        if (e.code === 'Enter') {
          handleEnterKeyDown();
          return;
        }
        handleArrowKeyDown(e.code);
      });

    return () => keydown$.unsubscribe();

    function handleEnterKeyDown() {
      const activeOpt = activeOptionRef.current;
      if (!activeOpt) return;
      emitChange(activeOpt);
    }
    function handleArrowKeyDown(code: string): void {
      const prevActiveOption = activeOptionRef.current;
      const flatOptions = flattenOptions(options, (option) => !option.disabled);

      const index = flatOptions.indexOf(prevActiveOption!);
      const len = flatOptions.length;
      const endIndex = len - 1;

      const nextActiveOption = code === 'ArrowDown' ? pickNext() : pickPrev();
      if (nextActiveOption === prevActiveOption) return;

      activeOptionRef.current = nextActiveOption;
      forceUpdate();
      nextEffect(activeIntoView);

      function pickNext(): SelectOption {
        return index === -1 || index === endIndex
          ? flatOptions[0]!
          : flatOptions[index + 1]!;
      }
      function pickPrev(): SelectOption {
        return index <= 0 ? flatOptions[endIndex]! : flatOptions[index - 1]!;
      }
    }
  }, [options, selected, active]);

  // 第一次加载时高亮选项
  useEffect(() => {
    // 高亮第一个选中的选项
    if (selected.length) {
      activeOptionRef.current = selected[0];
      forceUpdate();
      return;
    }
    // 高亮第一个选项
    const opts = flattenOptions(options, (option) => !option.disabled);
    if (!opts.length) return;
    activeOptionRef.current = opts[0];
    forceUpdate();
  }, []);

  return (
    <>
      {header && <div className={cls.__.header}>{header}</div>}
      <div className={cls.__.body} ref={boxRef}>
        {options.length > 0 ? (
          <ul className={cls.__.options}>{handleOptions(options)}</ul>
        ) : (
          <MenuEmpty empty={empty} />
        )}
      </div>
      {footer && <div className={cls.__.footer}>{footer}</div>}
    </>
  );

  // 让光标选中的元素可见
  function activeIntoView() {
    const box = boxRef.current;
    if (!box || !active || !activeOptionRef.current) return;

    const picked = box.querySelector<HTMLElement>('.' + optionCls['--'].picked);
    if (!picked) return;

    intoView(picked, box);
  }
  function handleOptions(
    options: SelectOptionsItem[] = [],
    parents: Exclude<SelectOptionsItem, SelectDivider>[] = [],
  ): React.ReactElement[] {
    return options.map((opt) => {
      if (isDivider(opt)) return getDivider(opt);
      if (isGroup(opt)) return getGroup(opt, parents);
      return getOption(opt);
    });

    function getDivider(opt: SelectDivider): React.ReactElement {
      const { type: _type, tag = 'li', key, ...rest } = opt;
      rest.attrs ||= {};
      rest.attrs.className = getClassNames(
        rest.attrs.className,
        cls.__.divider,
      );
      return <Divider {...rest} tag={tag} key={key} />;
    }
    function getGroup(
      opt: SelectOptionGroup,
      parents: Exclude<SelectOptionsItem, SelectDivider>[],
    ): React.ReactElement {
      const { attrs: optAttrs = {}, children, label, key, ...optRest } = opt;

      return (
        <li
          {...optAttrs}
          className={getClassNames(cls.__.group, optAttrs.className)}
          key={key}
        >
          <MenuOption
            {...optRest}
            attrs={{
              className: cls.__['group-title'],
              role: 'heading',
            }}
            tag="div"
            readonly
          >
            {label}
          </MenuOption>
          <ul className={cls.__['group-body']}>
            {handleOptions(children, [...parents, opt])}
          </ul>
        </li>
      );
    }

    function getOption(opt: SelectOption): React.ReactElement {
      const { attrs: optAttrs = {}, label, value, tag, ...optRest } = opt;
      const index = selected.findIndex((item) => item.value === opt.value);
      const checked = index > -1;
      return (
        <MenuOption
          {...optRest}
          attrs={{
            ...optAttrs,
            onMouseEnter,
            onClick,
          }}
          picked={opt === activeOptionRef.current}
          selected={checked}
          tag={tag || 'li'}
          key={value}
        >
          {typeof label === 'function' ? label(false, opt) : label}
        </MenuOption>
      );

      function onMouseEnter(e: React.MouseEvent<HTMLElement>): void {
        optAttrs.onMouseEnter?.(e);
        if (opt.disabled) return;
        activeOptionRef.current = opt;
        forceUpdate();
      }
      function onClick(e: React.MouseEvent<HTMLElement>): void {
        optAttrs.onClick?.(e);
        e.stopPropagation();
        if (opt.disabled) return;
        emitChange(opt);
      }
    }
  }
  function emitChange(option: SelectOption): void {
    const index = selected.indexOf(option);
    if (index > -1) {
      if (!multiple) return;
      selected.splice(index, 1);
    } else {
      if (!multiple) selected.length = 0;
      selected.push(option);
    }
    const selectedOptions = selected.slice();
    if (index === -1) {
      onSelect?.(option);
    }
    onSelectedChange(selectedOptions);
  }
};
