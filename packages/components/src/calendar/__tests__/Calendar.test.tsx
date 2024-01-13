import { fireEvent, render, act } from '@testing-library/react';
import { getClassNames } from '@tool-pack/basic';
import { $$, $ } from '~/select/__tests__/utils';
import { testAttrs } from '~/testAttrs';
import { Calendar } from '..';

describe('Calendar', () => {
  testAttrs(Calendar);
  it('basic', () => {
    expect(
      render(
        <Calendar
          today={new Date(2023, 11, 26)}
          value={new Date(2023, 11, 18)}
        />,
      ).container.firstChild,
    ).toMatchSnapshot();
  });

  it('默认不选中今天', () => {
    expect(
      render(<Calendar today={new Date(2023, 11, 26)} />).container.firstChild,
    ).toMatchSnapshot();
  });

  it('dateCell', () => {
    expect(
      render(
        <Calendar
          dateCell={(date, attrs, status) => (
            <td
              {...attrs}
              className={getClassNames(attrs.className, {
                active: status.isSelected,
              })}
            >
              {date.getDate()}
            </td>
          )}
          today={new Date(2023, 11, 26)}
          value={new Date(2023, 11, 18)}
        />,
      ).container.firstChild,
    ).toMatchSnapshot();
  });

  it('在没有外部 month 时，内部 value 改变应该改变 month', () => {
    jest.useFakeTimers();

    render(<Calendar value={new Date(2023, 11, 18)} />);

    expect($('.t-calendar-cell')).toHaveTextContent('26');
    expect($$('.t-calendar-cell')[41]).toHaveTextContent('6');

    fireEvent.click($('.t-calendar-cell--next-month')!);
    act(() => jest.advanceTimersByTime(1));

    expect($('.t-calendar-cell')).toHaveTextContent('31');
    expect($$('.t-calendar-cell')[41]).toHaveTextContent('10');
  });

  it('在有外部 month 时，内部 value 改变不应该改变 month', () => {
    jest.useFakeTimers();

    render(
      <Calendar value={new Date(2023, 11, 18)} month={new Date(2023, 11, 1)} />,
    );

    expect($('.t-calendar-cell')).toHaveTextContent('26');
    expect($$('.t-calendar-cell')[41]).toHaveTextContent('6');

    fireEvent.click($('.t-calendar-cell--next-month')!);
    act(() => jest.advanceTimersByTime(1));

    expect($('.t-calendar-cell')).toHaveTextContent('26');
    expect($$('.t-calendar-cell')[41]).toHaveTextContent('6');
  });
});
