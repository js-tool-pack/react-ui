import { getFilterInput, getBalloon, $$ } from '~/select/__tests__/utils';
import { SelectOptionsItem, SelectOption, Select } from '~/select';
import { fireEvent, render, act } from '@testing-library/react';

describe('Select.filter', () => {
  const options: SelectOptionsItem[] = [
    {
      label: 'foo',
      value: 1,
    },
    {
      label: 'bar',
      value: 2,
    },
  ];

  // 测试：原生 html 模拟 change 事件
  // test('test', () => {
  //   const input = document.createElement('input');
  //   document.body.appendChild(input);
  //
  //   const onChange = jest.fn();
  //   input.addEventListener('change', onChange);
  //
  //   input.dispatchEvent(new Event('change', { target: { value: 'f' } }));
  //
  //   expect(onChange).toBeCalled();
  //   expect(input.value).toBe('');
  // });

  it('should display the filter-input element when Select is in the open state', () => {
    expect(
      render(<Select options={[]} filterable visible />).container.firstChild,
    ).toMatchSnapshot();
    expect(getBalloon()).toMatchSnapshot();
  });

  it('should use default rules when filter is omitted', () => {
    const { container } = render(
      <Select options={options} filterable value={1} visible />,
    );
    expect(container.firstChild).toMatchSnapshot();

    expect(getBalloon()).toMatchSnapshot();

    fireEvent.change(getFilterInput(), {
      target: { value: 'f' },
    });
    expect(getBalloon()).toMatchSnapshot();

    fireEvent.change(getFilterInput(), {
      target: { value: 'b' },
    });
    expect(getBalloon()).toMatchSnapshot();
  });

  it('should use custom filter rules', () => {
    const filter = jest.fn((pattern: string, option: SelectOption): boolean => {
      if (!pattern) return true;
      return (option.value as number) > Number(pattern);
    });
    render(<Select options={options} filter={filter} filterable visible />);
    expect(filter).toBeCalled();
    expect($$('.t-word-balloon')).toMatchSnapshot();
    fireEvent.change(getFilterInput(), {
      target: { value: '2' },
    });
    expect(getBalloon()).toMatchSnapshot();

    fireEvent.change(getFilterInput(), {
      target: { value: '1' },
    });
    expect(getBalloon()).toMatchSnapshot();
    expect(filter.mock.calls.length).toBe(6);
    expect(filter.mock.calls).toEqual([
      ['', { label: 'foo', value: 1 }],
      ['', { label: 'bar', value: 2 }],
      ['2', { label: 'foo', value: 1 }],
      ['2', { label: 'bar', value: 2 }],
      ['1', { label: 'foo', value: 1 }],
      ['1', { label: 'bar', value: 2 }],
    ]);
  });

  const filter = jest.fn((pattern: string, option: SelectOption): boolean => {
    if (!pattern) return true;
    return (option.value as number) > Number(pattern);
  });
  it('should cease calling the filter when ignoreComposition is true and the input state is composition', () => {
    render(<Select options={options} filter={filter} filterable visible />);
    expect(filter).toBeCalled();

    filter.mockClear();

    fireEvent.change(getFilterInput(), {
      target: { value: '1' },
    });
    expect(filter.mock.calls).toEqual([
      ['1', { label: 'foo', value: 1 }],
      ['1', { label: 'bar', value: 2 }],
    ]);

    filter.mockClear();
    fireEvent.compositionStart(getFilterInput());
    fireEvent.change(getFilterInput(), {
      target: { value: '2' },
    });
    expect(filter).not.toBeCalled();

    fireEvent.compositionEnd(getFilterInput(), { target: { value: '3' } });
    expect(filter.mock.calls).toEqual([
      ['3', { label: 'foo', value: 1 }],
      ['3', { label: 'bar', value: 2 }],
    ]);
  });
  it('should continue calling the filter when ignoreComposition is false and the input state is composition', () => {
    render(
      <Select
        ignoreComposition={false}
        options={options}
        filter={filter}
        filterable
        visible
      />,
    );
    expect(filter).toBeCalled();

    filter.mockClear();

    fireEvent.change(getFilterInput(), {
      target: { value: '1' },
    });
    expect(filter.mock.calls).toEqual([
      ['1', { label: 'foo', value: 1 }],
      ['1', { label: 'bar', value: 2 }],
    ]);

    filter.mockClear();
    fireEvent.compositionStart(getFilterInput());
    fireEvent.change(getFilterInput(), {
      target: { value: '2' },
    });
    expect(filter.mock.calls).toEqual([
      ['2', { label: 'foo', value: 1 }],
      ['2', { label: 'bar', value: 2 }],
    ]);

    filter.mockClear();
    fireEvent.compositionEnd(getFilterInput(), { target: { value: '3' } });
    expect(filter.mock.calls).toEqual([
      ['3', { label: 'foo', value: 1 }],
      ['3', { label: 'bar', value: 2 }],
    ]);
  });
  it('修复测试 Select 组件在开启 filter 并点击了 filter input 后再次打开弹窗失败 #77', () => {
    jest.useFakeTimers();
    const { container } = render(
      <Select options={options} filterable clearable />,
    );

    expect(getBalloon()).toBeNull();
    // 第一步：点击select启动
    fireEvent.click(container.firstChild!);
    // 延时
    act(() => jest.advanceTimersByTime(500));
    // 进入
    act(() => jest.advanceTimersByTime(500));
    expect(getBalloon()).not.toBeNull();

    // 第二步：点击 filter input
    fireEvent.click(getFilterInput());

    // 第三步：点击外部关闭弹窗
    fireEvent.click(document.body);
    // 延时
    act(() => jest.advanceTimersByTime(500));
    // 退出
    act(() => jest.advanceTimersByTime(500));
    // 隐藏了
    expect(getBalloon()).toHaveClass('t-transition--invisible');

    // 第四步：点击select启动
    fireEvent.click(container.firstChild!);
    // 延时
    act(() => jest.advanceTimersByTime(500));
    // 进入
    act(() => jest.advanceTimersByTime(500));
    // 打开了，也就是在这一步出的问题。#77 是在这一步打开不了
    expect(getBalloon()).not.toHaveClass('t-transition--invisible');

    function getBalloon(): HTMLDivElement | null {
      return document.querySelector('.t-word-balloon');
    }
  });
});
