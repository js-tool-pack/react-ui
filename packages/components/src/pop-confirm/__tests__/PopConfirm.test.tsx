import { fireEvent, render } from '@testing-library/react';
import { PopConfirm } from '..';

describe('PopConfirm', () => {
  test('attrs', () => {
    const onClick = jest.fn();
    const { container } = render(
      <PopConfirm
        attrs={{ style: { background: '#fff' }, className: 'foo', onClick }}
        appendTo={null}
        visible
      >
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
      <PopConfirm appendTo={null} icon="foo-bar" content="bar" visible>
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
            onCancel={onCancel}
            icon="foo-bar"
            destroyOnHide
            content="bar"
            visible
          >
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
            onCancel={onCancel}
            icon="foo-bar"
            destroyOnHide
            content="bar"
            visible
          >
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
            onConfirm={onConfirm}
            icon="foo-bar"
            destroyOnHide
            content="bar"
            visible
          >
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
            onConfirm={onConfirm}
            icon="foo-bar"
            destroyOnHide
            content="bar"
            visible
          >
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
