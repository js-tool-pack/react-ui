import {
  getStartOfMonth,
  getClassNames,
  isNextMonth,
  isSameDate,
  inRange,
} from '@tool-pack/basic';
import {
  DatePanelProps,
  DateTimePanel,
  OptionsPanel,
  DatePanel,
} from './panel';
import type { DatePickerProps, RangeValueType } from '../date-picker.types';
import React, { useState, useRef } from 'react';
import { getClasses } from '@pkg/shared';
import { Button } from '~/button';
import { Space } from '~/space';

type Values = [start?: Date, end?: Date];

interface Props
  extends Pick<
      DatePickerProps,
      'dateDisabled' | 'shortcuts' | 'dateCell' | 'format'
    >,
    Required<Pick<DatePickerProps, 'range' | 'type'>> {
  onChange: (value: RangeValueType) => void;
  onConfirm?: () => void;
  values: Values;
}

const cls = getClasses(
  'date-picker-panel',
  ['body', 'footer'],
  ['in-range', 'active-hover'],
);

export const DatePickerPanel: React.FC<Props> = (props) => {
  const {
    shortcuts = [],
    dateDisabled,
    onConfirm,
    dateCell,
    onChange,
    format,
    values,
    range,
    type,
  } = props;

  const [months, setMonths] = useState<RangeValueType>(() => {
    const now = new Date();
    const start = getStartOfMonth(values[0] || now);
    return [start, getStartOfMonth(values[1] || now, 1)];
  });

  const [hoverValue, setHoverValue] = useState<Date>();
  const tempValueRef = useRef<Date>();

  return (
    <div className={cls.root}>
      <div className={cls.__.body}>{getContent()}</div>
      <div className={cls.__.footer}>
        <Space>
          {shortcuts.map((s, i) => (
            <Button
              onClick={() => onClickShortcut(s.value)}
              plain="dashed"
              size="small"
              type="info"
              key={i}
            >
              {s.label}
            </Button>
          ))}
        </Space>
        <div>
          <Button onClick={onConfirm} type="primary" size="small">
            确定
          </Button>
        </div>
      </div>
    </div>
  );

  function getContent(): React.ReactElement {
    const optionsPanelType =
      (type: 'month' | 'year' | 'time') => (index: 0 | 1) => (
        <OptionsPanel
          onChange={onValueChange(index)}
          value={values[index]}
          type={type}
        />
      );
    const map: Record<typeof type, (index: 0 | 1) => React.ReactElement> = {
      datetime: (i) => <DateTimePanel {...getPanelProps(i)} />,
      date: (index) => <DatePanel {...getPanelProps(index)} />,
      month: optionsPanelType('month'),
      time: optionsPanelType('time'),
      year: optionsPanelType('year'),
    };

    const content = map[type];
    if (!range) return content(0);
    return (
      <>
        {content(0)}
        {content(1)}
      </>
    );

    function getPanelProps(index: 0 | 1): DatePanelProps {
      return {
        dateCell: range ? _dateCell : dateCell,
        onMonthChange: onMonthChange(index),
        placement: getPlacement(index),
        onChange: onValueChange(index),
        month: months[index],
        value: values[index],
        format: format,
        values: values,
        dateDisabled,
        range: range,
      };
    }
    function _dateCell(
      ...args: Parameters<NonNullable<typeof dateCell>>
    ): ReturnType<NonNullable<typeof dateCell>> {
      const [date, attrs, status] = args;
      const [start, end] = values;
      const dateTime = date.getTime();
      const times: [number, number] = [
        start?.getTime() || 0,
        hoverValue?.getTime() || 0,
      ];
      times.sort((a, b) => a - b);
      const className = getClassNames(attrs.className, {
        [cls['--']['in-range']]:
          inRange(dateTime, [start?.getTime() || 0, end?.getTime() || 0]) ||
          (hoverValue && start && start === end && inRange(dateTime, times)),
        [cls['--']['active-hover']]: isSameDate(date, hoverValue),
        't-calendar-cell--active': inSomeDates(date, start, end),
      });
      attrs.onClick = () => {
        const tempValue = tempValueRef.current;
        if (tempValue) {
          // 第二次点击
          tempValueRef.current = undefined;
          const value: Parameters<typeof onChange>[0] = [date, tempValue];
          if (date.getTime() > tempValue.getTime()) value.reverse();
          onChange(value);
          setHoverValue(undefined);
          return;
        }
        // 第一次点击
        onChange([date, date]);
        tempValueRef.current = date;
      };
      attrs.onMouseEnter = () => {
        if (!start || start !== end) return;
        setHoverValue(date);
      };

      if (dateCell) return dateCell(date, attrs, status);
      return (
        <td {...attrs} className={className}>
          {date.getDate()}
        </td>
      );
    }

    function getPlacement(index: 0 | 1): 'right' | 'left' | null {
      if (!range) return null;
      index.toString(); // 没什么作用，只是不想让 index eslint 报错
      return null;
      // return index === 0 ? 'left' : 'right';
    }
    function onMonthChange(index: 0 | 1) {
      return (v: Date) => {
        const result: RangeValueType =
          index === 0 ? [v, months[1] as Date] : [months[0] as Date, v];

        if (range && isNextMonth(months[1], months[0])) {
          syncRangeMonth(index, v, result);
        }

        setMonths(result);
      };
    }
    function syncRangeMonth(
      index: 0 | 1,
      date: Date,
      months: [Date, Date],
    ): void {
      const [start, end] = months;
      if (index === 0) {
        // 向右推动
        isSameDate(date, end) && (months[1] = getStartOfMonth(end, 1));
        return;
      }
      // 向左推动
      isSameDate(date, start) && (months[0] = getStartOfMonth(start, -1));
    }
    function onValueChange(index: 0 | 1) {
      return (v: Date) => {
        if (!range) onMonthChange(index)(v);
        onChange(index === 0 ? [v, values[1] as Date] : [values[0] as Date, v]);
      };
    }

    function inSomeDates(date: Date, ...dates: (Date | void)[]): boolean {
      if (!dates.length) return false;
      return dates.some((d) => d && isSameDate(d, date));
    }
  }

  function onClickShortcut(d: RangeValueType | Date): void {
    onChange(
      (range
        ? Array.isArray(d)
          ? d
          : [d, d]
        : [d, values[1]!]) as RangeValueType,
    );
  }
};
