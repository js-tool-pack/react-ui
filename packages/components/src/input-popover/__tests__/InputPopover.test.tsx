import { render, act } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { InputPopover } from '..';

describe('InputPopover', () => {
  testAttrs(InputPopover);

  it('basic', () => {
    jest.useFakeTimers();
    render(<InputPopover visible />);
    act(() => jest.advanceTimersByTime(500));
    act(() => jest.advanceTimersByTime(500));
    expect(document.body).toMatchSnapshot();
  });
});
