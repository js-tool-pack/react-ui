import {
  Select,
  SelectControllerRef,
  SelectOption,
  SelectOptionsItem,
} from '..';
import { testAttrs } from '~/testAttrs';
import { act, fireEvent, render } from '@testing-library/react';
import { useRef } from 'react';
import { $, $$, getBalloon } from './utils';

describe('Select', () => {
  testAttrs(Select);

  test('basic', () => {
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
    const { container } = render(<Select options={options} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('select', () => {
    const options: SelectOption[] = [
      {
        value: 1,
        label: 'foo',
      },
      {
        value: 2,
        label: 'bar',
      },
    ];
    test('single', () => {
      const onSelect = jest.fn();
      const onChange = jest.fn();
      render(
        <Select
          visible
          onChange={onChange}
          onSelect={onSelect}
          options={options}
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
          visible
          multiple
          onChange={onChange}
          onSelect={onSelect}
          options={options}
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
        value: 1,
        label: 'foo',
      },
      {
        value: 2,
        label: 'bar',
      },
    ];
    const { container } = render(<Select disabled options={options} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('group', () => {
    const options: SelectOptionsItem[] = [
      {
        type: 'group',
        key: 1,
        label: '1',
        attrs: { className: 'test' },
        children: [
          {
            value: 2,
            label: 'foo',
          },
          {
            value: 3,
            label: 'bar',
          },
        ],
      },
      {
        value: 4,
        label: 'foo',
      },
      {
        value: 5,
        label: 'bar',
      },
    ];
    render(<Select visible={true} options={options} />);
    expect(document.body).toMatchSnapshot();
  });

  test('clearable|onClear', () => {
    const onClear = jest.fn();
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
    const { container } = render(
      <Select clearable onClear={onClear} value={1} options={options} />,
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
        value: 1,
        label: 'foo',
      },
      {
        value: 2,
        label: 'bar',
      },
    ];
    render(<Select multiple visible value={[1, 2]} options={options} />);
    expect(document.body).toMatchSnapshot();
  });

  test('maxTagCount', () => {
    jest.useFakeTimers();
    const options: SelectOptionsItem[] = [
      {
        value: 1,
        label: 'foo',
      },
      {
        value: 2,
        label: 'bar',
      },
      {
        value: 3,
        label: 'bar',
      },
      {
        value: 4,
        label: 'bar',
      },
      {
        value: 5,
        label: 'bar',
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
          value: 1,
          label: 'foo',
        },
        {
          value: 2,
          label: 'bar',
        },
        {
          value: 3,
          label: 'bar',
        },
        {
          value: 4,
          label: 'bar',
        },
        {
          value: 5,
          label: 'bar',
        },
      ];
      const controllerRef = useRef<SelectControllerRef>(null);
      return (
        <>
          <button
            id="focus"
            onClick={() => {
              controllerRef.current?.focus();
              setTimeout(() => {
                controllerRef.current?.blur();
              }, 500);
            }}>
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
      render(<Select icon="ic" options={[]} />).container.querySelector(
        '.t-select__suffix',
      ),
    ).toMatchSnapshot();
  });

  test('loading', () => {
    expect(
      render(<Select loading options={[]} />).container.querySelector(
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
});
