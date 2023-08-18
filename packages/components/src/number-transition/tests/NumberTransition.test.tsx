import { NumberTransition } from '..';
import { act, fireEvent, render } from '@testing-library/react';
import { useState } from 'react';
import { testAttrs } from '~/testAttrs';
import { Button } from '~/button';

describe('NumberTransition', () => {
  testAttrs(NumberTransition);

  test('basic', () => {
    jest.useFakeTimers();
    const { container } = render(<NumberTransition active duration={5} />);
    expect(container.firstChild).toHaveTextContent('0');
    act(() => jest.advanceTimersByTime(20));
    expect(container.firstChild).toHaveTextContent('10');
    jest.useRealTimers();
  });

  test('reset', () => {
    jest.useFakeTimers();
    const App = () => {
      const [active, setActive] = useState(true);
      const [signal, setSignal] = useState({});
      return (
        <div>
          <NumberTransition
            active={active}
            onFinished={() => setActive(false)}
            resetSignal={signal}
            duration={5}
          />
          <Button
            onClick={() => {
              setSignal({});
              setActive(true);
            }}>
            reset
          </Button>
        </div>
      );
    };

    const { container } = render(<App />);

    const getChild = () => container.firstChild!.firstChild;
    expect(getChild()).toHaveTextContent('0');
    act(() => jest.advanceTimersByTime(20));
    expect(getChild()).toHaveTextContent('10');

    // reset
    fireEvent.click(container.querySelector('.t-button')!);

    expect(getChild()).toHaveTextContent('0');
    act(() => jest.advanceTimersByTime(20));
    expect(getChild()).toHaveTextContent('10');

    jest.useRealTimers();
  });
});
