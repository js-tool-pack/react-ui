import { getStartOfDate, createArray } from '@tool-pack/basic';
import { InnerCommonProps } from '../../date-picker.types';
import { PickerOption, PickerPanel } from '~/picker';
import { getClasses } from '@pkg/shared';
import React, { useMemo } from 'react';

interface Props extends InnerCommonProps {
  type: 'month' | 'time' | 'year';
}

const cls = getClasses('date-picker-options-panel', ['header', 'body'], []);

export const OptionsPanel: React.FC<Props> = (props) => {
  const { value: date, onChange, type } = props;

  const options = useMemo(() => {
    const map: Record<typeof type, () => Array<PickerOption<number>[]>> = {
      time: () => [hours, minutes, seconds],
      month: () => [years, months],
      year: () => [years],
    };
    return map[type]();
  }, [date, type]);
  const value: number[] = useMemo(() => {
    const map: Record<typeof type, () => number[]> = {
      time: () =>
        date ? [date.getHours(), date.getMinutes(), date.getSeconds()] : [],
      month: () => (date ? [date.getFullYear(), date.getMonth()] : []),
      year: () => (date ? [date.getFullYear()] : []),
    };
    return map[type]();
  }, [date, type]);

  return (
    <div className={cls.root}>
      <PickerPanel
        attrs={{ style: { height: '100%' } }}
        onChange={_onChange}
        options={options}
        value={value}
      />
    </div>
  );

  function _onChange(value: number[]): void {
    const _date = date || getStartOfDate(new Date());
    const map: Record<typeof type, () => Date> = {
      month: () =>
        new Date(
          value[0] as number,
          value[1] as number,
          _date.getDate(),
          _date.getHours(),
          _date.getMinutes(),
          _date.getSeconds(),
        ),
      year: () =>
        new Date(
          value[0] as number,
          _date.getMonth(),
          _date.getDate(),
          _date.getHours(),
          _date.getMinutes(),
          _date.getSeconds(),
        ),
      time: () =>
        new Date(
          _date.getFullYear(),
          _date.getMonth(),
          _date.getDate(),
          ...value,
        ),
    };

    onChange(map[type]());
  }
};

const hours = createNumberOptions(24);
const minutes = createNumberOptions(60);
const seconds = createNumberOptions(60);
const years = createNumberOptions(2101, 1900);
const months = createNumberOptions(13, 1).map((v) => ({
  ...v,
  value: v.value - 1,
}));

function createNumberOptions(end: number, start = 0): PickerOption<number>[] {
  return createArray({
    fill(i) {
      const value = String(i).padStart(2, '0');
      return {
        label: value,
        value: i,
      };
    },
    start,
    end,
  });
}
