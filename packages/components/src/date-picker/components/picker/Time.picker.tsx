import {
  parseFormattedDate,
  getClassNames,
  formatDate,
} from '@tool-pack/basic';
import { useFollowingState, getClasses } from '@pkg/shared';
import { InnerCommonProps } from '../../date-picker.types';
import { InputPopover } from '~/input-popover';
import { OptionsPanel } from '../panel';
import React from 'react';

interface Props extends InnerCommonProps {
  panelRef: React.RefObject<HTMLDivElement>;
}

const cls = getClasses('date-picker-time-picker', ['pop'], []);

export const TimePicker: React.FC<Props> = (props) => {
  const { value: date, panelRef, onChange } = props;

  const formular = 'hh:mm:ss';
  const [value, setValue] = useFollowingState(date, (v) =>
    v ? formatDate(v, formular) : '',
  );

  return (
    <div className={cls.root}>
      <InputPopover
        popoverProps={{
          content: (
            <OptionsPanel onChange={onChange} value={date} type="time" />
          ),
          attrs: {
            className: getClassNames(cls.__.pop),
          },
          viewport: () => panelRef.current || document.body,
          widthByTrigger: false,
          appendTo: null,
        }}
        size="small"
      >
        <input
          onChange={onInputChange}
          placeholder="选择时间"
          value={value}
          type="text"
        />
      </InputPopover>
    </div>
  );

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const v = e.target.value;
    setValue(v);
    if (v.length !== formular.length) return;
    const d = parseFormattedDate(v, formular);
    const _date = date || new Date();
    onChange(
      new Date(
        _date.getFullYear(),
        _date.getMonth(),
        _date.getDate(),
        d.getHours(),
        d.getMinutes(),
        d.getSeconds(),
      ),
    );
  }
};
