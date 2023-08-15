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
        visible
        attrs={{ className: 'foo' }}
        bodyAttrs={{ className: 'bar' }}
      />,
    );
    expect(getRoot()).toMatchSnapshot();
  });

  test('resizeable', () => {
    render(<Drawer visible resizeable />);
    expect(getRoot()).toMatchSnapshot();
  });

  test('size', () => {
    render(<Drawer visible size="200px" />);
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
      render(<Drawer visible placement="right" />);
      expect(getRoot()).toHaveClass('t-drawer--right');
    });
    test('right', () => {
      render(<Drawer visible placement="left" />);
      expect(getRoot()).toHaveClass('t-drawer--left');
    });
    test('top', () => {
      render(<Drawer visible placement="top" />);
      expect(getRoot()).toHaveClass('t-drawer--top');
    });
  });

  describe('destroyOnClose', function () {
    test('true', () => {
      render(<Drawer visible={false} destroyOnClose={true} />);
      expect(getRoot()).toBeNull();
    });
    test('false', () => {
      render(<Drawer visible={false} destroyOnClose={false} />);
      expect(getRoot()).not.toBeNull();
    });
    test('mixed', () => {
      render(<Drawer visible={false} destroyOnClose="mixed" />);
      expect(getRoot()).toBeNull();
    });
  });

  describe('appendTo', function () {
    it('null', () => {
      const { container } = render(
        <div>
          <Drawer visible appendTo={null} />
        </div>,
      );
      expect(container.firstChild!.firstChild).toHaveClass(
        't-drawer__root t-drawer--right',
      );
    });
    it('fn null', () => {
      const { container } = render(
        <div>
          <Drawer visible appendTo={() => null} />
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
            visible
            appendTo={() => document.querySelector('.append-target')}
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
      render(<Drawer visible closeOnClickMask={false} />);
      fireEvent.click(getMask()!);
      expect(getRoot()).not.toHaveClass('t-dialog-leave-active');
    });

    test('on onClose', () => {
      const onClose = jest.fn();
      expect(onClose).not.toBeCalled();
      render(<Drawer visible closeOnClickMask onClose={onClose} />);
      fireEvent.click(getMask()!);
      expect(getRoot()).toHaveClass('t-drawer-leave-active');
      expect(onClose).toBeCalled();
    });
  });

  describe('esc', () => {
    const escKeydown = () => fireEvent.keyDown(window, { key: 'Escape' });

    test('off', () => {
      render(<Drawer visible esc={false} />);
      escKeydown();
      expect(getRoot()).not.toHaveClass('t-drawer-leave-active');
    });

    test('on onClose', () => {
      const onClose = jest.fn();
      expect(onClose).not.toBeCalled();
      render(<Drawer visible esc onClose={onClose} />);
      escKeydown();
      expect(getRoot()).toHaveClass('t-drawer-leave-active');
      expect(onClose).toBeCalled();
    });
  });

  test('zIndex', () => {
    render(<Drawer visible zIndex={12345} />);
    expect(getRoot()).toHaveStyle({ zIndex: 12345 });
  });

  describe('header', () => {
    test('title', () => {
      render(<Drawer visible title="123" />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
    });
    test('closeIcon', () => {
      render(<Drawer visible closeIcon={'foo'} />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
    });
    test('showClose', () => {
      render(<Drawer visible showClose={false} />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
    });
    test('content', () => {
      render(<Drawer visible header="123" />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-drawer__header')).not.toBeNull();
    });
    test('null', () => {
      render(<Drawer visible header={null} />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-drawer__header')).toBeNull();
    });
  });

  describe('footer', () => {
    test('content', () => {
      render(<Drawer visible footer="123" />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-drawer__footer')).not.toBeNull();
    });
    test('null', () => {
      render(<Drawer visible footer={null} />);
      const root = getRoot();
      expect(root).toMatchSnapshot();
      expect(root!.querySelector('.t-drawer__footer')).toBeNull();
    });
  });
});
