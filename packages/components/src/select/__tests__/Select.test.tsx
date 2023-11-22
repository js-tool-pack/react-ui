import {
  SelectControllerRef,
  SelectOptionsItem,
  SelectOption,
  Select,
} from '~/select';
import { fireEvent, render, act } from '@testing-library/react';
import { getBalloon, $$, $ } from './utils';
import { emptyFn } from '@tool-pack/basic';
import { testAttrs } from '~/testAttrs';
import { useRef } from 'react';

describe('Select', () => {
  testAttrs(Select);

  test('basic', () => {
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
    const { container } = render(<Select options={options} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('select', () => {
    const options: SelectOption[] = [
      {
        label: 'foo',
        value: 1,
      },
      {
        label: 'bar',
        value: 2,
      },
    ];
    test('single', () => {
      const onSelect = jest.fn();
      const onChange = jest.fn();
      render(
        <Select
          onChange={onChange}
          onSelect={onSelect}
          options={options}
          visible
        />,
      );
      expect(onSelect).not.toBeCalled();
      expect(onChange).not.toBeCalled();
      expect(getBalloon()).not.toBeNull();

      fireEvent.click($('.t-select-option')!);
      expect(onSelect).toBeCalled();
      expect(onChange).toBeCalled();

      expect(onSelect.mock.calls[0]).toEqual([options[0]]);
      expect(onChange.mock.calls[0]).toEqual([options[0]!.value, [options[0]]]);
    });
    test('multiple', () => {
      const onSelect = jest.fn();
      const onChange = jest.fn();

      render(
        <Select
          onChange={onChange}
          onSelect={onSelect}
          options={options}
          multiple
          visible
        />,
      );
      expect(onSelect).not.toBeCalled();
      expect(onChange).not.toBeCalled();
      expect(getBalloon()).not.toBeNull();

      fireEvent.click($('.t-select-option')!);
      expect(onSelect).toBeCalled();
      expect(onChange).toBeCalled();

      expect(onSelect.mock.calls[0]).toEqual([options[0]]);
      expect(onChange.mock.calls[0]).toEqual([
        [options[0]!.value],
        [options[0]],
      ]);

      onSelect.mockClear();
      onChange.mockClear();

      fireEvent.click($$('.t-select-option')[1]!);
      expect(onSelect.mock.calls[0]).toEqual([options[1]]);
      expect(onChange.mock.calls[0]).toEqual([
        options.map((o) => o.value),
        options,
      ]);
    });
  });

  test('disabled', () => {
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
    const { container } = render(<Select options={options} disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('group', () => {
    const options: SelectOptionsItem[] = [
      {
        children: [
          {
            label: 'foo',
            value: 2,
          },
          {
            label: 'bar',
            value: 3,
          },
        ],
        attrs: { className: 'test' },
        type: 'group',
        label: '1',
        key: 1,
      },
      {
        label: 'foo',
        value: 4,
      },
      {
        label: 'bar',
        value: 5,
      },
    ];
    render(<Select options={options} visible={true} />);
    expect(document.body).toMatchSnapshot();
  });

  test('clearable|onClear', () => {
    const onClear = jest.fn();
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
    const { container } = render(
      <Select onClear={onClear} options={options} clearable value={1} />,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(
      container.querySelector('.t-select-selection__selected')!.firstChild,
    ).toHaveClass('t-select-selection__label');
    expect(
      container.querySelector('.t-select-selection__selected')!.firstChild,
    ).not.toHaveClass('t-select-selection__placeholder');

    expect(onClear).not.toBeCalled();
    fireEvent.click(container.querySelector('.t-select-selection__clear')!);
    expect(onClear).toBeCalled();
    expect(
      container.querySelector('.t-select-selection__selected')!.firstChild,
    ).not.toHaveClass('t-select-selection__label');
    expect(
      container.querySelector('.t-select-selection__selected')!.firstChild,
    ).toHaveClass('t-select-selection__placeholder');
  });

  test('multiple', () => {
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
    render(<Select options={options} value={[1, 2]} multiple visible />);
    expect(document.body).toMatchSnapshot();
  });

  test('maxTagCount', () => {
    jest.useFakeTimers();
    const options: SelectOptionsItem[] = [
      {
        label: 'foo',
        value: 1,
      },
      {
        label: 'bar',
        value: 2,
      },
      {
        label: 'bar',
        value: 3,
      },
      {
        label: 'bar',
        value: 4,
      },
      {
        label: 'bar',
        value: 5,
      },
    ];
    render(
      <Select options={options} maxTagCount={1} value={[1, 2]} multiple />,
    );
    expect(document.body).toMatchSnapshot();

    fireEvent.mouseEnter($('.t-select-tags__count')!);
    act(() => jest.advanceTimersByTime(500));
    expect(document.body).toMatchSnapshot();
  });
  test('controller|onFocus|onBlur', () => {
    jest.useFakeTimers();
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    render(<App />);

    expect(onFocus).not.toBeCalled();
    expect(onBlur).not.toBeCalled();

    expect(getTrigger()).not.toHaveFocus();
    fireEvent.click($('#focus')!);
    expect(getTrigger()).toHaveFocus();
    expect(onFocus).toBeCalled();
    expect(onBlur).not.toBeCalled();

    act(() => jest.advanceTimersByTime(500));
    expect(getTrigger()).not.toHaveFocus();
    expect(onBlur).toBeCalled();

    expect(onFocus.mock.calls.length).toBe(1);
    expect(onBlur.mock.calls.length).toBe(1);

    function App() {
      const options: SelectOptionsItem[] = [
        {
          label: 'foo',
          value: 1,
        },
        {
          label: 'bar',
          value: 2,
        },
        {
          label: 'bar',
          value: 3,
        },
        {
          label: 'bar',
          value: 4,
        },
        {
          label: 'bar',
          value: 5,
        },
      ];
      const controllerRef = useRef<SelectControllerRef>(null);
      return (
        <>
          <button
            onClick={() => {
              controllerRef.current?.focus();
              setTimeout(() => {
                controllerRef.current?.blur();
              }, 500);
            }}
            id="focus"
          >
            focus
          </button>
          <Select
            controllerRef={controllerRef}
            options={options}
            onFocus={onFocus}
            onBlur={onBlur}
            maxTagCount={1}
            value={[1, 2]}
            multiple
          />
        </>
      );
    }
    function getTrigger() {
      return $('.t-select-tab-trigger');
    }
  });

  test('icon', () => {
    expect(
      render(<Select options={[]} icon="ic" />).container.querySelector(
        '.t-select__suffix',
      ),
    ).toMatchSnapshot();
  });

  test('loading', () => {
    expect(
      render(<Select options={[]} loading />).container.querySelector(
        '.t-select__suffix',
      ),
    ).toMatchSnapshot();
  });

  test('status', () => {
    expect(
      render(<Select status="error" options={[]} />).container.firstChild,
    ).toHaveClass(' t-select--error');

    expect(
      render(<Select status="warning" options={[]} />).container.firstChild,
    ).toHaveClass(' t-select--warning');
  });

  test('missing options', () => {
    // 使用jest.spyOn监听prop-types警告
    const consoleErrorSpy = jest.spyOn(console, 'error');
    consoleErrorSpy.mockImplementation(emptyFn);

    render(<Select options={undefined as any} />);

    // 验证控制台是否打印了prop-types警告
    expect(consoleErrorSpy.mock.calls[0]![2]).toBe(
      'The prop `options` is marked as required in `Select`, but its value is `undefined`.',
    );
    // 恢复console.error函数
    consoleErrorSpy.mockRestore();
  });
});
