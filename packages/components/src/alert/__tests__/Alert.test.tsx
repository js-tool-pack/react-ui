import { fireEvent, render, act } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { Left } from '@pkg/icons';
import { Alert } from '..';

describe('Alert', () => {
  testAttrs(Alert);

  test('basic', () => {
    expect(
      render(<Alert title="Tips">foo bar</Alert>).container.firstChild,
    ).toMatchSnapshot();
  });

  test('bordered', () => {
    expect(
      render(<Alert title="Tips">foo bar</Alert>).container.firstChild,
    ).toHaveClass('t-alert--bordered');
    expect(
      render(
        <Alert bordered={false} title="Tips">
          foo bar
        </Alert>,
      ).container.firstChild,
    ).not.toHaveClass('t-alert--bordered');
    expect(
      render(
        <Alert title="Tips" bordered>
          foo bar
        </Alert>,
      ).container.firstChild,
    ).toHaveClass('t-alert--bordered');
  });

  test('closable', () => {
    expect(
      render(
        <Alert title="Tips" closable>
          foo bar
        </Alert>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });

  test('icon', () => {
    expect(
      render(
        <Alert icon={<Left />} title="Tips">
          foo bar
        </Alert>,
      ).container.firstChild,
    ).toMatchSnapshot();
    expect(
      render(
        <Alert title="Tips" icon={null}>
          foo bar
        </Alert>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });

  describe('onClose', () => {
    test('basic', () => {
      jest.useFakeTimers();
      const onClose = jest.fn();
      const { container } = render(
        <Alert onClose={onClose} title="Tips" closable>
          foo bar
        </Alert>,
      );
      expect(onClose).not.toBeCalled();
      fireEvent.click(container.querySelector('.t-alert__close-btn')!);
      expect(onClose).toBeCalled();
      expect(container.firstChild).not.toBeNull();
      act(() => jest.advanceTimersByTime(300));
      expect(container.firstChild).toBeNull();
    });

    test('preventDefault', () => {
      jest.useFakeTimers();
      const onClose = jest.fn((e) => e.preventDefault());
      const { container } = render(
        <Alert onClose={onClose} title="Tips" closable>
          foo bar
        </Alert>,
      );
      expect(onClose).not.toBeCalled();
      fireEvent.click(container.querySelector('.t-alert__close-btn')!);
      expect(onClose).toBeCalled();
      expect(container.firstChild).not.toBeNull();
      act(() => jest.advanceTimersByTime(300));
      expect(container.firstChild).not.toBeNull();
    });
  });

  test('partial', () => {
    expect(
      render(<Alert title="Tips" />).container.firstChild,
    ).toMatchSnapshot();
    expect(
      render(<Alert>foo bar</Alert>).container.firstChild,
    ).toMatchSnapshot();
  });
});
