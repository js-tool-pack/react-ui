import { fireEvent, render } from '@testing-library/react';
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
        bodyAttrs={{ className: 'bar' }}
        attrs={{ className: 'foo' }}
        visible
        center
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
    render(<Dialog centered visible />);
    expect(getRoot()!.querySelector('.t-dialog__wrapper')).toHaveClass(
      't-dialog__centered',
    );
  });

  describe('closeOnClickMask', () => {
    const getMask = () => document.querySelector('.t-dialog__mask');

    test('off', () => {
      render(<Dialog closeOnClickMask={false} visible />);
      fireEvent.click(getMask()!);
      expect(getRoot()).not.toHaveClass('t-dialog-leave-active');
    });

    test('on onClose', () => {
      const onClose = jest.fn();
      expect(onClose).not.toBeCalled();
      render(<Dialog onClose={onClose} closeOnClickMask visible />);
      fireEvent.click(getMask()!);
      expect(getRoot()).toHaveClass('t-dialog-leave-active');
      expect(onClose).toBeCalled();
    });
  });

  describe('esc', () => {
    const escKeydown = () => fireEvent.keyDown(window, { key: 'Escape' });

    test('off', () => {
      render(<Dialog esc={false} visible />);
      escKeydown();
      expect(getRoot()).not.toHaveClass('t-dialog-leave-active');
    });

    test('on onClose', () => {
      const onClose = jest.fn();
      expect(onClose).not.toBeCalled();
      render(<Dialog onClose={onClose} visible esc />);
      escKeydown();
      expect(getRoot()).toHaveClass('t-dialog-leave-active');
      expect(onClose).toBeCalled();
    });
  });

  test('zIndex', () => {
    render(<Dialog zIndex={12345} visible />);
    expect(getRoot()).toHaveStyle({ zIndex: 12345 });
  });

  describe('header', () => {
    test('content', () => {
      render(<Dialog header="123" visible />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-dialog__header')).not.toBeNull();
    });
    test('null', () => {
      render(<Dialog header={null} visible />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-dialog__header')).toBeNull();
    });
  });

  describe('footer', () => {
    test('content', () => {
      render(<Dialog footer="123" visible />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-dialog__footer')).not.toBeNull();
    });
    test('null', () => {
      render(<Dialog footer={null} visible />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-dialog__footer')).toBeNull();
    });
  });
});
