import { SelectStaticProps, SelectOption } from '../select.types';
import { getClassNames, isFunction } from '@tool-pack/basic';
import { ConvertOptional } from '@tool-pack/types';
import { getClasses } from '@pkg/shared';
import { Popover } from '~/popover';
import { Tag } from '~/tag';
import React from 'react';

interface Props
  extends ConvertOptional<
    Pick<SelectStaticProps, 'maxTagCount' | 'disabled' | 'size'>
  > {
  onSelectedChange: (selected: SelectOption[]) => void;
  selected: SelectOption[];
  active: boolean;
}

const cls = getClasses('select-tags', ['pop-tags', 'tag', 'count'], []);

export const SelectionTags: React.FC<Props> = (props) => {
  const { onSelectedChange, maxTagCount, disabled, selected, active, size } =
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
        content={
          <div className={cls.__['pop-tags']}>{invisibleTags.map(getTag)}</div>
        }
        disabled={active}
      >
        <Tag
          attrs={{ className: getClassNames(cls.__.tag, cls.__.count) }}
          bordered={false}
          size={size}
          type="info"
        >
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
        key={option.value}
        bordered={false}
        size={size}
        type="info"
      >
        {isFunction(option.label) ? option.label(true, option) : option.label}
      </Tag>
    );
  }
};
