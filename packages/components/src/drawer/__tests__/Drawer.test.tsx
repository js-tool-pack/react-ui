import { fireEvent, render } from '@testing-library/react';
import Demo from '../demo/basic';
import { Drawer } from '..';

describe('Drawer', () => {
  const getRoot = () => document.querySelector('.t-drawer__root');

  test('basic', () => {
    const { container } = render(<Demo />);
    expect(document.body).toMatchSnapshot();
    fireEvent.click(container.querySelector('.t-button')!);
    expect(getRoot()).toMatchSnapshot();
  });

  test('attrs', () => {
    render(
      <Drawer
        bodyAttrs={{ className: 'bar' }}
        attrs={{ className: 'foo' }}
        visible
      />,
    );
    expect(getRoot()).toMatchSnapshot();
  });

  test('resizeable', () => {
    render(<Drawer resizeable visible />);
    expect(getRoot()).toMatchSnapshot();
  });

  test('size', () => {
    render(<Drawer size="200px" visible />);
    expect(getRoot()!.querySelector('.t-drawer')).toHaveStyle({
      width: '200px',
    });
  });

  describe('placement', function () {
    test('default', () => {
      render(<Drawer visible />);
      expect(getRoot()).toHaveClass('t-drawer--right');
    });
    test('right', () => {
      render(<Drawer placement="right" visible />);
      expect(getRoot()).toHaveClass('t-drawer--right');
    });
    test('right', () => {
      render(<Drawer placement="left" visible />);
      expect(getRoot()).toHaveClass('t-drawer--left');
    });
    test('top', () => {
      render(<Drawer placement="top" visible />);
      expect(getRoot()).toHaveClass('t-drawer--top');
    });
  });

  describe('destroyOnClose', function () {
    test('true', () => {
      render(<Drawer destroyOnClose={true} visible={false} />);
      expect(getRoot()).toBeNull();
    });
    test('false', () => {
      render(<Drawer destroyOnClose={false} visible={false} />);
      expect(getRoot()).not.toBeNull();
    });
    test('mixed', () => {
      render(<Drawer destroyOnClose="mixed" visible={false} />);
      expect(getRoot()).toBeNull();
    });
  });

  describe('appendTo', function () {
    it('null', () => {
      const { container } = render(
        <div>
          <Drawer appendTo={null} visible />
        </div>,
      );
      expect(container.firstChild!.firstChild).toHaveClass(
        't-drawer__root t-drawer--right',
      );
    });
    it('fn null', () => {
      const { container } = render(
        <div>
          <Drawer appendTo={() => null} visible />
        </div>,
      );
      expect(container.firstChild!.firstChild).toHaveClass(
        't-drawer__root t-drawer--right',
      );
    });
    it('fn HTMLElement', () => {
      const { container } = render(
        <div>
          <Drawer
            appendTo={() => document.querySelector('.append-target')}
            visible
          />
          <div className="append-target"></div>
        </div>,
      );
      expect(
        container
          .querySelector('.append-target')!
          .querySelector('.t-drawer__root'),
      ).not.toBeNull();
    });
  });

  describe('closeOnClickMask', () => {
    const getMask = () => document.querySelector('.t-drawer__mask');

    test('off', () => {
      render(<Drawer closeOnClickMask={false} visible />);
      fireEvent.click(getMask()!);
      expect(getRoot()).not.toHaveClass('t-dialog-leave-active');
    });

    test('on onClose', () => {
      const onClose = jest.fn();
      expect(onClose).not.toBeCalled();
      render(<Drawer onClose={onClose} closeOnClickMask visible />);
      fireEvent.click(getMask()!);
      expect(getRoot()).toHaveClass('t-drawer-leave-active');
      expect(onClose).toBeCalled();
    });
  });

  describe('esc', () => {
    const escKeydown = () => fireEvent.keyDown(window, { key: 'Escape' });

    test('off', () => {
      render(<Drawer esc={false} visible />);
      escKeydown();
      expect(getRoot()).not.toHaveClass('t-drawer-leave-active');
    });

    test('on onClose', () => {
      const onClose = jest.fn();
      expect(onClose).not.toBeCalled();
      render(<Drawer onClose={onClose} visible esc />);
      escKeydown();
      expect(getRoot()).toHaveClass('t-drawer-leave-active');
      expect(onClose).toBeCalled();
    });
  });

  test('zIndex', () => {
    render(<Drawer zIndex={12345} visible />);
    expect(getRoot()).toHaveStyle({ zIndex: 12345 });
  });

  describe('header', () => {
    test('title', () => {
      render(<Drawer title="123" visible />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
    });
    test('closeIcon', () => {
      render(<Drawer closeIcon={'foo'} visible />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
    });
    test('showClose', () => {
      render(<Drawer showClose={false} visible />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
    });
    test('content', () => {
      render(<Drawer header="123" visible />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-drawer__header')).not.toBeNull();
    });
    test('null', () => {
      render(<Drawer header={null} visible />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-drawer__header')).toBeNull();
    });
  });

  describe('footer', () => {
    test('content', () => {
      render(<Drawer footer="123" visible />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-drawer__footer')).not.toBeNull();
    });
    test('null', () => {
      render(<Drawer footer={null} visible />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-drawer__footer')).toBeNull();
    });
  });
});
