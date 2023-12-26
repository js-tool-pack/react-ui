import { fireEvent, render, act } from '@testing-library/react';
import { SelectOption, Select } from '~/select';
import { getBalloon, $$, $ } from './utils';

describe('Select.keyboard', () => {
  const options = [
    {
      label: 'foo',
      value: 1,
    },
    {
      label: 'bar',
      value: 2,
    },
    {
      label: 'foo bar',
      value: 3,
    },
  ] satisfies SelectOption[];

  const cls = {
    selected: 't-select-option--selected',
    invisible: 't-transition--invisible',
    picked: 't-select-option--picked',
    active: 't-input-skin--active',
  };

  it('should close Select when esc keydown', () => {
    jest.useFakeTimers();
    const { container } = render(<Select options={options} visible />);
    expect(container.firstChild).toHaveClass(cls.active);
    expect(getBalloon()).not.toHaveClass(cls.invisible);

    fireEvent.keyDown(window, { key: 'Escape' });
    act(() => jest.advanceTimersByTime(500));

    expect(container.firstChild).toHaveClass(cls.active);
    expect(getBalloon()).toHaveClass(cls.invisible);
  });

  it('should highlight the first option', () => {
    render(<Select options={options} visible />);

    const $options = $$('.t-select-option');
    expect($options.length).toBe(3);

    expect($options[0]).toHaveClass(cls.picked);
    expect($options[1]).not.toHaveClass(cls.picked);
    expect($options[2]).not.toHaveClass(cls.picked);
  });

  it('should highlight the first selected option', () => {
    const value = options[1]!.value;
    render(<Select options={options} value={value} visible />);

    const $options = $$('.t-select-option');
    expect($options.length).toBe(3);

    expect($options[0]).not.toHaveClass(cls.picked);
    expect($options[1]).toHaveClass(cls.picked);
    expect($options[2]).not.toHaveClass(cls.picked);
  });

  it('should highlight the first option when tab-trigger trigger', () => {
    jest.useFakeTimers();
    render(<Select options={options} />);

    const tabTrigger = $('.t-input-popover-tab-trigger')!;
    expect(getBalloon()).toBeNull();

    act(() => tabTrigger.focus());
    expect(tabTrigger).toHaveFocus();

    fireEvent.keyDown(tabTrigger, { code: 'Enter' });
    expect(getBalloon()).not.toBeNull();

    act(() => jest.advanceTimersByTime(500));

    const $options = $$('.t-select-option');
    expect($options.length).toBe(3);

    expect($options[0]).toHaveClass(cls.picked);
    expect($options[1]).not.toHaveClass(cls.picked);
    expect($options[2]).not.toHaveClass(cls.picked);
  });

  it("should allow controlling the selected option using the keyboard's up and down arrow keys and selecting by pressing the Enter key", () => {
    jest.useFakeTimers();
    const { container } = render(<Select options={options} visible />);

    const $options = $$('.t-select-option');

    expect(getBalloon()).not.toHaveClass(cls.invisible);
    expect($options.length).toBe(3);

    expect($options[0]).not.toHaveClass(cls.selected);
    expect($options[1]).not.toHaveClass(cls.selected);
    expect($options[2]).not.toHaveClass(cls.selected);

    expect($options[0]).toHaveClass(cls.picked);
    expect($options[1]).not.toHaveClass(cls.picked);
    expect($options[2]).not.toHaveClass(cls.picked);

    fireEvent.keyDown(window, { code: 'ArrowDown' });
    expect($options[0]).not.toHaveClass(cls.picked);
    expect($options[1]).toHaveClass(cls.picked);
    expect($options[2]).not.toHaveClass(cls.picked);

    fireEvent.keyDown(window, { code: 'ArrowDown' });
    expect($options[0]).not.toHaveClass(cls.picked);
    expect($options[1]).not.toHaveClass(cls.picked);
    expect($options[2]).toHaveClass(cls.picked);

    fireEvent.keyDown(window, { code: 'ArrowDown' });
    expect($options[0]).toHaveClass(cls.picked);
    expect($options[1]).not.toHaveClass(cls.picked);
    expect($options[2]).not.toHaveClass(cls.picked);

    fireEvent.keyDown(window, { code: 'ArrowUp' });
    expect($options[0]).not.toHaveClass(cls.picked);
    expect($options[1]).not.toHaveClass(cls.picked);
    expect($options[2]).toHaveClass(cls.picked);

    fireEvent.keyDown(window, { code: 'ArrowUp' });
    expect($options[0]).not.toHaveClass(cls.picked);
    expect($options[1]).toHaveClass(cls.picked);
    expect($options[2]).not.toHaveClass(cls.picked);

    fireEvent.keyDown(window, { code: 'Enter' });
    expect($options[0]).not.toHaveClass(cls.picked);
    expect($options[1]).toHaveClass(cls.picked + ' ' + cls.selected);
    expect($options[2]).not.toHaveClass(cls.picked);

    expect(container.querySelector('.t-select__selected')).toMatchSnapshot();

    expect(getBalloon()).not.toHaveClass(cls.invisible);
    act(() => jest.advanceTimersByTime(500));
    expect(getBalloon()).toHaveClass(cls.invisible);
  });
});
