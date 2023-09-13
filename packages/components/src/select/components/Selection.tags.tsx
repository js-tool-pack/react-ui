import React from 'react';
import { getClasses } from '@pkg/shared';
import { SelectOption, SelectProps } from '~/select';
import { Tag } from '~/tag';
import { getClassNames, isFunction } from '@tool-pack/basic';
import { ConvertOptional } from '@tool-pack/types';
import { Popover } from '~/popover';

interface Props
  extends ConvertOptional<
    Pick<SelectProps, 'size' | 'maxTagCount' | 'disabled'>
  > {
  onSelectedChange: (selected: SelectOption[]) => void;
  selected: SelectOption[];
  active: boolean;
}

const cls = getClasses('select-tags', ['pop-tags', 'tag', 'count'], []);

export const SelectionTags: React.FC<Props> = (props) => {
  const { size, active, maxTagCount, disabled, selected, onSelectedChange } =
    props;

  const onClose = (_e: React.MouseEvent, opt: SelectOption) => {
    const index = selected.indexOf(opt);
    selected.splice(index, 1);
    onSelectedChange([...selected]);
  };

  if (!maxTagCount || maxTagCount < 0 || maxTagCount >= selected.length)
    return selected.map(getTag);

  const visibleTags = selected.slice(0, maxTagCount);
  const invisibleTags = selected.slice(maxTagCount);

  return (
    <>
      {visibleTags.map(getTag)}
      <Popover
        disabled={active}
        content={
          <div className={cls.__['pop-tags']}>{invisibleTags.map(getTag)}</div>
        }>
        <Tag
          attrs={{ className: getClassNames(cls.__.tag, cls.__.count) }}
          size={size}
          type="info"
          bordered={false}>
          + {invisibleTags.length}
        </Tag>
      </Popover>
    </>
  );

  function getTag(option: SelectOption) {
    return (
      <Tag
        onClose={(e) => onClose(e, option)}
        attrs={{ className: cls.__.tag }}
        closeBtnAttrs={{ tabIndex: -1 }}
        closeable={!disabled}
        bordered={false}
        key={option.value}
        size={size}
        type="info">
        {isFunction(option.label) ? option.label(true, option) : option.label}
      </Tag>
    );
  }
};
