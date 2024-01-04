import { fireEvent, render, act } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { InputPopover } from '..';
import { useState } from 'react';

describe('InputPopover', () => {
  testAttrs(InputPopover);

  function getBalloon() {
    return document.querySelector('.t-word-balloon') as HTMLElement;
  }

  it('basic', () => {
    jest.useFakeTimers();
    render(<InputPopover visible />);
    act(() => jest.advanceTimersByTime(500));
    act(() => jest.advanceTimersByTime(500));
    expect(document.body).toMatchSnapshot();
  });

  it('传入外部 visible 时，不可以内部控制', () => {
    jest.useFakeTimers();
    const App = () => {
      const [visible, setVisible] = useState(true);
      return (
        <InputPopover onVisibleChange={setVisible} visible={visible}>
          <div>123</div>
          <button onClick={() => setVisible(false)}>close</button>
        </InputPopover>
      );
    };
    render(<App />);

    const cls = {
      enterActive: 't-popover-enter-active',
      leaveActive: 't-popover-leave-active',
      invisible: 't-transition--invisible',
    };

    expect(getBalloon()).not.toBeNull();
    expect(getBalloon()).toHaveClass(cls.enterActive);

    act(() => jest.advanceTimersByTime(500));
    expect(getBalloon()).not.toHaveClass(cls.enterActive);

    expect(getBalloon()).not.toHaveClass(cls.leaveActive);
    expect(getBalloon()).not.toHaveClass(cls.invisible);

    fireEvent.click(document.body);
    expect(getBalloon()).not.toHaveClass(cls.leaveActive);
    expect(getBalloon()).not.toHaveClass(cls.invisible);

    act(() => jest.advanceTimersByTime(500));
    expect(getBalloon()).not.toHaveClass(cls.leaveActive);
    expect(getBalloon()).not.toHaveClass(cls.invisible);
  });
});
