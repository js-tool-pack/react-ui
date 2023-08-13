import { render, fireEvent } from '@testing-library/react';
import { Alert } from '..';
import { Left } from '@pkg/icons';

describe('Alert', () => {
  test('basic', () => {
    expect(
      render(<Alert title="Tips">foo bar</Alert>).container.firstChild,
    ).toMatchSnapshot();
  });

  test('bordered', () => {
    expect(
      render(<Alert title="Tips">foo bar</Alert>).container.firstChild,
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
        <Alert title="Tips" icon={<Left />}>
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

  test('onClose', () => {
    const onClose = jest.fn();
    const { container } = render(
      <Alert title="Tips" closable onClose={onClose}>
        foo bar
      </Alert>,
    );
    fireEvent.click(container.querySelector('.t-alert__close-btn')!);
    expect(onClose).toBeCalled();
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
