import { Select, SelectOption } from '~/select';
import { act, fireEvent, render } from '@testing-library/react';
import { $$, getBalloon } from './utils';

describe('Select.keyboard', () => {
  const options = [
    {
      value: 1,
      label: 'foo',
    },
    {
      value: 2,
      label: 'bar',
    },
    {
      value: 3,
      label: 'foo bar',
    },
  ] satisfies SelectOption[];

  const cls = {
    picked: 't-select-option--picked',
    selected: 't-select-option--selected',
    invisible: 't-transition--invisible',
  };

  it('should close Select when esc keydown', () => {
    jest.useFakeTimers();
    const { container } = render(<Select visible options={options} />);
    expect(container.firstChild).toHaveClass('t-select--active');
    expect(getBalloon()).not.toHaveClass(cls.invisible);

    fireEvent.keyDown(window, { key: 'Escape' });
    act(() => jest.advanceTimersByTime(500));

    expect(container.firstChild).not.toHaveClass('t-select--active');
    expect(getBalloon()).toHaveClass(cls.invisible);
  });

  it('should highlight the first option', () => {
    render(<Select visible options={options} />);

    const $options = $$('.t-select-option');
    expect($options.length).toBe(3);

    expect($options[0]).toHaveClass(cls.picked);
    expect($options[1]).not.toHaveClass(cls.picked);
    expect($options[2]).not.toHaveClass(cls.picked);
  });

  it('should highlight the first selected option', () => {
    const value = options[1]!.value;
    render(<Select visible value={value} options={options} />);

    const $options = $$('.t-select-option');
    expect($options.length).toBe(3);

    expect($options[0]).not.toHaveClass(cls.picked);
    expect($options[1]).toHaveClass(cls.picked);
    expect($options[2]).not.toHaveClass(cls.picked);
  });

  it('should focus TabTrigger when tab keydown', () => {
    const value = options[1]!.value;
    render(<Select visible value={value} options={options} />);

    // const tagTrigger = $('')
  });

  it("should allow controlling the selected option using the keyboard's up and down arrow keys and selecting by pressing the Enter key", () => {
    jest.useFakeTimers();
    const { container } = render(<Select visible options={options} />);

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
