import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Tag } from '..';
import { testAttrs } from '~/testAttrs';
import Demo from '../demo/basic';

describe('Tag', () => {
  testAttrs(Tag);

  test('demo', () => {
    const { container } = render(<Demo />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('bordered', () => {
    expect(render(<Tag />).container.firstChild).toHaveClass('t-tag--bordered');
    expect(
      render(<Tag bordered={false} />).container.firstChild,
    ).not.toHaveClass('t-tag--bordered');
  });

  test('round', () => {
    expect(render(<Tag round />).container.firstChild).toHaveClass(
      't-tag--round',
    );
    expect(render(<Tag />).container.firstChild).not.toHaveClass(
      't-tag--round',
    );
  });

  test('size', () => {
    expect(render(<Tag size="small" />).container.firstChild).toHaveClass(
      't--size-sm',
    );
    expect(render(<Tag size="medium" />).container.firstChild).toHaveClass(
      't--size-m',
    );
    expect(render(<Tag />).container.firstChild).toHaveClass('t--size-m');
    expect(render(<Tag size="large" />).container.firstChild).toHaveClass(
      't--size-lg',
    );
  });

  test('icon', () => {
    expect(
      render(<Tag icon={'tag'} size="small" />).container.firstChild,
    ).toMatchSnapshot();
  });

  describe('checkable', () => {
    test('unable', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Tag onChange={onChange} checkable={false} />,
      );
      expect(container.firstChild).not.toHaveClass('t-tag--checkable');
      expect(container.firstChild).not.toHaveClass('t-tag--checked');
      expect(onChange).not.toBeCalled();

      fireEvent.click(container.firstChild!);
      expect(onChange).not.toBeCalled();
      expect(container.firstChild).not.toHaveClass('t-tag--checked');
    });

    test('enable', () => {
      const onChange = jest.fn();
      const { container } = render(<Tag onChange={onChange} checkable />);

      expect(container.firstChild).toHaveClass('t-tag--checkable');
      expect(container.firstChild).not.toHaveClass('t-tag--checked');
      expect(onChange).not.toBeCalled();

      fireEvent.click(container.firstChild!);
      expect(onChange).toBeCalled();
      expect(onChange.mock.calls).toEqual([[true]]);
      expect(container.firstChild).toHaveClass('t-tag--checked');

      fireEvent.click(container.firstChild!);
      expect(onChange.mock.calls).toEqual([[true], [false]]);
      expect(container.firstChild).not.toHaveClass('t-tag--checked');
    });

    test('closeBtnAttrs', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Tag onChange={onChange} closeable closeBtnAttrs={{ tabIndex: -1 }} />,
      );
      expect(container.querySelector('button')).toHaveAttribute(
        'tabindex',
        '-1',
      );
    });

    test('checked', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Tag onChange={onChange} checked checkable />,
      );

      expect(container.firstChild).toHaveClass(
        't-tag--checkable t-tag--checked',
      );
      expect(onChange).not.toBeCalled();

      fireEvent.click(container.firstChild!);
      expect(onChange).toBeCalled();
      expect(onChange.mock.calls).toEqual([[false]]);
      expect(container.firstChild).not.toHaveClass('t-tag--checked');

      fireEvent.click(container.firstChild!);
      expect(onChange.mock.calls).toEqual([[false], [true]]);
      expect(container.firstChild).toHaveClass('t-tag--checked');
    });

    test('checked uncheckable', () => {
      const onChange = jest.fn();
      const { container } = render(<Tag onChange={onChange} checked />);

      expect(container.firstChild).toHaveClass('t-tag--checked');
      expect(container.firstChild).not.toHaveClass('t-tag--checkable');
      expect(onChange).not.toBeCalled();

      fireEvent.click(container.firstChild!);
      expect(onChange).not.toBeCalled();
      expect(container.firstChild).toHaveClass('t-tag--checked');
    });
  });

  describe('closeable', () => {
    test('basic', () => {
      const onClose = jest.fn();
      const { container } = render(
        <Tag closeable onClose={onClose}>
          tag
        </Tag>,
      );

      expect(onClose).not.toBeCalled();
      expect(container.firstChild).toMatchSnapshot();
      expect(container.firstChild).not.toBeNull();

      fireEvent.click(container.querySelector('.t-tag__close')!);
      expect(onClose).toBeCalled();
      expect(container.firstChild).toMatchSnapshot();
      expect(onClose.mock.calls[0][0]._reactName).toBe('onClick');
      expect(container.firstChild).toBeNull();
    });

    test('preventDefault', () => {
      const onClose = jest.fn((e: React.MouseEvent) => e.preventDefault());
      const { container } = render(
        <Tag closeable onClose={onClose}>
          tag
        </Tag>,
      );

      expect(onClose).not.toBeCalled();
      expect(container.firstChild).not.toBeNull();

      fireEvent.click(container.querySelector('.t-tag__close')!);
      expect(onClose).toBeCalled();
      expect(container.firstChild).not.toBeNull();
    });
  });

  describe('disabled', () => {
    test('basic', () => {
      expect(render(<Tag />).container.firstChild).not.toHaveClass(
        't-tag--disabled',
      );
      expect(render(<Tag disabled />).container.firstChild).toHaveClass(
        't-tag--disabled',
      );
    });

    test('checkable', () => {
      const onChange = jest.fn();
      const { container } = render(
        <Tag onChange={onChange} disabled checkable />,
      );

      expect(container.firstChild).toHaveClass('t-tag--checkable');
      expect(container.firstChild).not.toHaveClass('t-tag--checked');
      expect(onChange).not.toBeCalled();

      fireEvent.click(container.firstChild!);
      expect(onChange).not.toBeCalled();
      expect(container.firstChild).not.toHaveClass('t-tag--checked');
    });

    test('closeable', () => {
      const onClose = jest.fn();
      const { container } = render(
        <Tag closeable disabled onClose={onClose}>
          tag
        </Tag>,
      );

      expect(onClose).not.toBeCalled();
      expect(container.firstChild).not.toBeNull();

      fireEvent.click(container.querySelector('.t-tag__close')!);
      expect(onClose).not.toBeCalled();
      expect(container.firstChild).not.toBeNull();
    });

    test('关闭按钮拦截外部点击事件', () => {
      const onWindowClick = jest.fn();
      const onClick = jest.fn();
      const { container } = render(
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div onClick={onClick}>
          <Tag closeable>tag</Tag>
        </div>,
      );

      window.addEventListener('click', onWindowClick);

      expect(onClick).not.toBeCalled();
      expect(onWindowClick).not.toBeCalled();
      expect(container.firstChild!.firstChild).not.toBeNull();

      fireEvent.click(container.querySelector('.t-tag__close')!);
      expect(onClick).not.toBeCalled();
      expect(onWindowClick).not.toBeCalled();
      expect(container.firstChild!.firstChild).toBeNull();
    });
  });
});
