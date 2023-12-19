import { getClassNames, getEndOfMonth, dateAdd } from '@tool-pack/basic';
import { ButtonContext, ButtonGroup, Button } from '~/button';
import type { RequiredPart } from '@tool-pack/types';
import { getClasses } from '@pkg/shared';
import { Right, Left } from '@pkg/icons';
import { Icon } from '~/icon';
import React from 'react';

interface Props {
  setValue: (value: Date) => void;
  value: Date;
}
const cls = getClasses('calendar-header', ['month'], []);
const defaultProps = {} satisfies Partial<Props>;

export const CalendarHeader: React.FC<Props> = (props) => {
  const { setValue, value } = props as RequiredPart<
    Props,
    keyof typeof defaultProps
  >;

  return (
    <div className={getClassNames(cls.root, {})}>
      <div className={cls.__.month}>
        {value.getFullYear()} {monthNames[value.getMonth()]}
      </div>
      <ButtonContext.Provider value={{ type: 'default', size: 'small' }}>
        <ButtonGroup>
          <Button onClick={() => changeMonth(-1)}>
            <Icon>
              <Left />
            </Icon>
          </Button>
          <Button onClick={clickToday}> 今天 </Button>
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
    setValue(new Date());
  }
  function changeMonth(offset: -1 | 1): void {
    const endOfMonth = getEndOfMonth(value, offset);
    if (endOfMonth.getDate() < value.getDate()) {
      setValue(endOfMonth);
      return;
    }
    setValue(dateAdd(value, offset, 'month'));
  }
};

CalendarHeader.defaultProps = defaultProps;
const monthNames = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
] as const;
