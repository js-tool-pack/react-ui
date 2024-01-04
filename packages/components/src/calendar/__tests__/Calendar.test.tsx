import { render } from '@testing-library/react';
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
});
