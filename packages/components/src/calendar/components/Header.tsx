import { getClassNames, getEndOfMonth, dateAdd } from '@tool-pack/basic';
import { ButtonContext, ButtonGroup, Button } from '~/button';
import type { RequiredPart } from '@tool-pack/types';
import type { CalendarLocale } from '~/calendar';
import { getClasses } from '@pkg/shared';
import { Right, Left } from '@pkg/icons';
import React, { useMemo } from 'react';
import { Icon } from '~/icon';

interface Props {
  locale: Pick<CalendarLocale, 'monthBeforeYear' | 'monthNames' | 'today'>;
  onMonthChange: (value: Date) => void;
  onChange: (value: Date) => void;
  today: Date;
  value: Date;
}
const cls = getClasses('calendar-header', ['month'], []);
const defaultProps = {} satisfies Partial<Props>;

export const CalendarHeader: React.FC<Props> = (props) => {
  const { onMonthChange, onChange, locale, today, value } =
    props as RequiredPart<Props, keyof typeof defaultProps>;

  const monthStr = useMemo(() => {
    const ym = [
      value.getFullYear(),
      locale.monthNames[value.getMonth()] as string,
    ];
    if (locale.monthBeforeYear) ym.reverse();
    return ym.join(' ');
  }, [locale.monthNames, locale.monthBeforeYear, value]);

  return (
    <div className={getClassNames(cls.root, {})}>
      <div className={cls.__.month}>{monthStr}</div>
      <ButtonContext.Provider value={{ type: 'default', size: 'small' }}>
        <ButtonGroup>
          <Button onClick={() => changeMonth(-1)}>
            <Icon>
              <Left />
            </Icon>
          </Button>
          <Button onClick={clickToday}>{locale.today}</Button>
          <Button onClick={() => changeMonth(1)}>
            <Icon>
              <Right />
            </Icon>
          </Button>
        </ButtonGroup>
      </ButtonContext.Provider>
    </div>
  );
  function clickToday() {
    onChange(today);
    onMonthChange(today);
  }
  function changeMonth(offset: -1 | 1): void {
    const endOfMonth = getEndOfMonth(value, offset);
    if (endOfMonth.getDate() < value.getDate()) {
      onMonthChange(endOfMonth);
      return;
    }
    onMonthChange(dateAdd(value, offset, 'month'));
  }
};

CalendarHeader.defaultProps = defaultProps;
