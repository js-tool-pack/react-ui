import { PopConfirm } from '..';
import { fireEvent, render } from '@testing-library/react';

describe('PopConfirm', () => {
  // 模拟 ResizeObserver，ResizeObserver 不存在于 jsdom 中
  const MockObserverInstance: ResizeObserver = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
  beforeEach(() => {
    global.ResizeObserver = jest
      .fn()
      .mockImplementation(() => MockObserverInstance);
  });

  test('attrs', () => {
    const onClick = jest.fn();
    const { container } = render(
      <PopConfirm
        visible
        attrs={{ className: 'foo', style: { background: '#fff' }, onClick }}
        appendTo={null}>
        <div>foo bar</div>
      </PopConfirm>,
    );

    const balloon = container.querySelector('.t-word-balloon');

    expect(balloon).toHaveClass('foo');
    expect(balloon).toHaveStyle({ background: '#fff' });

    expect(onClick).not.toBeCalled();
    fireEvent.click(balloon!);
    expect(onClick).toBeCalled();
  });

  test('icon', () => {
    const { container } = render(
      <PopConfirm visible icon="foo-bar" content="bar" appendTo={null}>
        <div>foo</div>
      </PopConfirm>,
    );
    const balloon = container.querySelector('.t-word-balloon');
    expect(balloon).toMatchSnapshot();
  });

  describe('callback', () => {
    const getBalloon = () => document.querySelector('.t-word-balloon');
    test('cancel undo', () => {
      const onCancel = jest.fn(() => false);
      render(
        <div>
          <PopConfirm
            visible
            destroyOnHide
            icon="foo-bar"
            onCancel={onCancel}
            content="bar">
            <div>foo</div>
          </PopConfirm>
          <div className="hide">hide</div>
        </div>,
      );
      // expect(getBalloon()).toMatchSnapshot();
      expect(onCancel).not.toBeCalled();
      fireEvent.click(document.querySelector('.t-pop-confirm__cancel')!);
      expect(getBalloon()).not.toHaveClass('t-pop-confirm-leave-active');
      expect(onCancel).toBeCalled();
    });
    test('cancel', () => {
      const onCancel = jest.fn();
      render(
        <div>
          <PopConfirm
            visible
            destroyOnHide
            icon="foo-bar"
            onCancel={onCancel}
            content="bar">
            <div>foo</div>
          </PopConfirm>
          <div className="hide">hide</div>
        </div>,
      );
      // expect(getBalloon()).toMatchSnapshot();
      expect(onCancel).not.toBeCalled();
      fireEvent.click(document.querySelector('.t-pop-confirm__cancel')!);
      expect(getBalloon()).toHaveClass('t-pop-confirm-leave-active');
      expect(onCancel).toBeCalled();
    });
    test('confirm undo', () => {
      const onConfirm = jest.fn(() => false);
      render(
        <div>
          <PopConfirm
            visible
            destroyOnHide
            icon="foo-bar"
            onConfirm={onConfirm}
            content="bar">
            <div>foo</div>
          </PopConfirm>
          <div className="hide">hide</div>
        </div>,
      );
      // expect(getBalloon()).toMatchSnapshot();
      expect(onConfirm).not.toBeCalled();
      fireEvent.click(document.querySelector('.t-pop-confirm__confirm')!);
      expect(getBalloon()).not.toHaveClass('t-pop-confirm-leave-active');
      expect(onConfirm).toBeCalled();
    });
    test('confirm', () => {
      const onConfirm = jest.fn();
      render(
        <div>
          <PopConfirm
            visible
            destroyOnHide
            icon="foo-bar"
            onConfirm={onConfirm}
            content="bar">
            <div>foo</div>
          </PopConfirm>
          <div className="hide">hide</div>
        </div>,
      );
      // expect(getBalloon()).toMatchSnapshot();
      expect(onConfirm).not.toBeCalled();
      fireEvent.click(document.querySelector('.t-pop-confirm__confirm')!);
      expect(getBalloon()).toHaveClass('t-pop-confirm-leave-active');
      expect(onConfirm).toBeCalled();
    });
  });
});
