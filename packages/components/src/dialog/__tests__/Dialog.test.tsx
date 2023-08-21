import { render, fireEvent } from '@testing-library/react';
import Demo from '../demo/basic';
import { Dialog } from '..';

describe('Dialog', () => {
  const getRoot = () => document.querySelector('.t-dialog__root');

  test('basic', () => {
    const { container } = render(<Demo />);
    expect(document.body).toMatchSnapshot();
    fireEvent.click(container.querySelector('.t-button')!);
    expect(getRoot()).toMatchSnapshot();
  });

  test('attrs', () => {
    render(
      <Dialog
        visible
        center
        attrs={{ className: 'foo' }}
        bodyAttrs={{ className: 'bar' }}
      />,
    );
    expect(getRoot()).toMatchSnapshot();
  });

  test('center', () => {
    render(<Dialog visible center />);
    expect(getRoot()!.querySelector('.t-dialog')).toHaveClass(
      't-dialog__center',
    );
  });

  test('centered', () => {
    render(<Dialog visible centered />);
    expect(getRoot()!.querySelector('.t-dialog__wrapper')).toHaveClass(
      't-dialog__centered',
    );
  });

  describe('closeOnClickMask', () => {
    const getMask = () => document.querySelector('.t-dialog__mask');

    test('off', () => {
      render(<Dialog visible closeOnClickMask={false} />);
      fireEvent.click(getMask()!);
      expect(getRoot()).not.toHaveClass('t-dialog-leave-active');
    });

    test('on onClose', () => {
      const onClose = jest.fn();
      expect(onClose).not.toBeCalled();
      render(<Dialog visible closeOnClickMask onClose={onClose} />);
      fireEvent.click(getMask()!);
      expect(getRoot()).toHaveClass('t-dialog-leave-active');
      expect(onClose).toBeCalled();
    });
  });

  describe('esc', () => {
    const escKeydown = () => fireEvent.keyDown(window, { key: 'Escape' });

    test('off', () => {
      render(<Dialog visible esc={false} />);
      escKeydown();
      expect(getRoot()).not.toHaveClass('t-dialog-leave-active');
    });

    test('on onClose', () => {
      const onClose = jest.fn();
      expect(onClose).not.toBeCalled();
      render(<Dialog visible esc onClose={onClose} />);
      escKeydown();
      expect(getRoot()).toHaveClass('t-dialog-leave-active');
      expect(onClose).toBeCalled();
    });
  });

  test('zIndex', () => {
    render(<Dialog visible zIndex={12345} />);
    expect(getRoot()).toHaveStyle({ zIndex: 12345 });
  });

  describe('header', () => {
    test('content', () => {
      render(<Dialog visible header="123" />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-dialog__header')).not.toBeNull();
    });
    test('null', () => {
      render(<Dialog visible header={null} />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-dialog__header')).toBeNull();
    });
  });

  describe('footer', () => {
    test('content', () => {
      render(<Dialog visible footer="123" />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-dialog__footer')).not.toBeNull();
    });
    test('null', () => {
      render(<Dialog visible footer={null} />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-dialog__footer')).toBeNull();
    });
  });
});
