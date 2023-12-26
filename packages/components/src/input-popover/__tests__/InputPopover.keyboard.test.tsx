import { fireEvent, render, act } from '@testing-library/react';
import { InputPopover } from '..';

describe('InputPopover.keyboard', () => {
  const cls = {
    invisible: 't-transition--invisible',
    active: 't-input-skin--active',
  };

  it('should close popover when esc keydown', () => {
    jest.useFakeTimers();
    const { container } = render(<InputPopover visible />);
    expect(container.firstChild).toHaveClass(cls.active);
    expect(getBalloon()).not.toHaveClass(cls.invisible);

    fireEvent.keyDown(window, { key: 'Escape' });
    act(() => jest.advanceTimersByTime(500));

    expect(container.firstChild).toHaveClass(cls.active);
    expect(getBalloon()).toHaveClass(cls.invisible);
  });

  it('should open popover when tab and enter keydown', () => {
    jest.useFakeTimers();
    const { container } = render(<InputPopover />);

    expect(container.firstChild).not.toHaveClass(cls.active);
    expect(getBalloon()).toBeNull();

    // 在测试环境按下 tab 键不会让 input 获得焦点
    // fireEvent.keyDown(window, { key: 'Tab' });
    // fireEvent.keyUp(window, { key: 'Tab' });
    fireEvent.focus(getTrigger());
    expect(container.firstChild).toHaveClass(cls.active);

    fireEvent.keyDown(getTrigger(), { code: 'Enter' });
    act(() => jest.advanceTimersByTime(500));
    act(() => jest.advanceTimersByTime(500));
    expect(getBalloon()).not.toBeNull();
  });
});
function getTrigger(): HTMLInputElement {
  return $('.t-input-popover-tab-trigger')!;
}
function $<T extends HTMLElement = HTMLElement>(selectors: string): null | T {
  return document.querySelector<T>(selectors);
}
function getBalloon() {
  return $('.t-word-balloon') as HTMLDivElement;
}
