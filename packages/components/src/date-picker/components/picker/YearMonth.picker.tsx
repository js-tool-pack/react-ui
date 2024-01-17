import { useFollowingState, getClasses } from '@pkg/shared';
import { PickerOption, Picker } from '~/picker';
import { createArray } from '@tool-pack/basic';
import React from 'react';

interface Props {
  onChange: (value: [year: number, month: number]) => void;
  panelRef: React.RefObject<HTMLDivElement>;
  value?: Date;
}

const cls = getClasses('date-picker-year-month-picker', ['label', 'pop'], []);

export const YearMonthPicker: React.FC<Props> = (props) => {
  const { value: date, panelRef, onChange } = props;

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
        format={(v) => `${v[0]}年${v[1]}月`}
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
