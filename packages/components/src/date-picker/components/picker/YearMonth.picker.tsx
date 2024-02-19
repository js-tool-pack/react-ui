import { useFollowingState, getClasses } from '@pkg/shared';
import { useLocale } from '~/config-provider/useLocale';
import { PickerOption, Picker } from '~/picker';
import { createArray } from '@tool-pack/basic';
import EnUS from '~/calendar/locale/en-US';
import React from 'react';

interface Props {
  onChange: (value: [year: number, month: number]) => void;
  panelRef: React.RefObject<HTMLDivElement>;
  value?: Date;
}

const cls = getClasses('date-picker-year-month-picker', ['label', 'pop'], []);

export const YearMonthPicker: React.FC<Props> = (props) => {
  const { value: date, panelRef, onChange } = props;
  const locale = useLocale('calendar', EnUS);

  const [value, setValue] = useFollowingState(date, (v) =>
    v ? [v.getFullYear(), v.getMonth() + 1] : [],
  );

  return (
    <div className={cls.root}>
      <Picker
        inputPopoverProps={{
          popoverProps: {
            viewport: () => panelRef.current || document.body,
            attrs: { className: cls.__.pop },
            widthByTrigger: false,
            appendTo: null,
          },
        }}
        format={(v) => {
          const ym = [v[0], locale.monthNames[v[1]! - 1]!];
          if (locale.monthBeforeYear) ym.reverse();
          return ym.join(' ');
        }}
        evenlyDivided={false}
        onChange={_onChange}
        options={Options}
        value={value}
      />
    </div>
  );

  function _onChange(v: typeof value): void {
    setValue(v);
    onChange(v as [number, number]);
  }
};

const Options: Array<PickerOption<number>[]> = [
  createArray({
    fill: (v) => ({ label: v, value: v }),
    start: 1900,
    end: 2101,
  }),
  createArray({
    fill: (v) => ({ value: v, label: v }),
    start: 1,
    len: 12,
  }),
];
