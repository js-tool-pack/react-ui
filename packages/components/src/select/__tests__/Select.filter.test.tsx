import { Select, SelectOption, SelectOptionsItem } from '~/select';
import { fireEvent, render } from '@testing-library/react';
import { $$, getBalloon, getFilterInput } from '~/select/__tests__/utils';

describe('Select.filter', () => {
  const options: SelectOptionsItem[] = [
    {
      value: 1,
      label: 'foo',
    },
    {
      value: 2,
      label: 'bar',
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
      <Select filterable visible value={1} options={options} />,
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
    expect(filter.mock.calls.length).toBe(18);
    expect(filter.mock.calls).toEqual([
      ['', { label: 'foo', value: 1 }],
      ['', { label: 'bar', value: 2 }],
      ['', { label: 'foo', value: 1 }],
      ['', { label: 'bar', value: 2 }],
      ['', { label: 'foo', value: 1 }],
      ['', { label: 'bar', value: 2 }],
      ['', { label: 'foo', value: 1 }],
      ['', { label: 'bar', value: 2 }],
      ['', { label: 'foo', value: 1 }],
      ['', { label: 'bar', value: 2 }],
      ['2', { label: 'foo', value: 1 }],
      ['2', { label: 'bar', value: 2 }],
      ['2', { label: 'foo', value: 1 }],
      ['2', { label: 'bar', value: 2 }],
      ['1', { label: 'foo', value: 1 }],
      ['1', { label: 'bar', value: 2 }],
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
      ['2', { label: 'foo', value: 1 }],
      ['2', { label: 'bar', value: 2 }],
    ]);

    filter.mockClear();
    fireEvent.compositionEnd(getFilterInput(), { target: { value: '3' } });
    expect(filter.mock.calls).toEqual([
      ['3', { label: 'foo', value: 1 }],
      ['3', { label: 'bar', value: 2 }],
      ['3', { label: 'foo', value: 1 }],
      ['3', { label: 'bar', value: 2 }],
    ]);
  });
});
