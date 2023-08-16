import { Dropdown, DropdownOptionsItem } from '..';
import { act, fireEvent, render } from '@testing-library/react';
import { Button } from '~/button';
import { Tooltip } from '~/tooltip';
import { nextTick } from '@tool-pack/basic';

describe('Dropdown', () => {
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
      <Dropdown
        visible
        options={[]}
        attrs={{ className: 'foo', style: { background: '#fff' }, onClick }}
        appendTo={null}>
        <Button>foo bar</Button>
      </Dropdown>,
    );
    const balloon = container.querySelector('.t-word-balloon');

    expect(balloon).toHaveClass('foo');
    expect(balloon).toHaveStyle({ background: '#fff' });

    expect(onClick).not.toBeCalled();
    fireEvent.click(balloon!);
    expect(onClick).toBeCalled();
  });

  test('basic', () => {
    const onSelect = jest.fn();
    const options: DropdownOptionsItem[] = [
      { key: '1', label: '黄金蛋炒饭' },
      { key: 'd', type: 'divider' },
      { key: '2', label: '扬州炒饭' },
    ];

    const { container } = render(
      <Dropdown visible onSelect={onSelect} options={options} appendTo={null}>
        <Button>foo bar</Button>
      </Dropdown>,
    );
    const balloon = container.querySelector('.t-word-balloon');
    expect(balloon).toMatchSnapshot();

    expect(onSelect).not.toBeCalled();
    fireEvent.click(balloon!.querySelector('.t-option')!);
    expect(balloon).toMatchSnapshot();
    expect(onSelect).toBeCalled();
    expect(onSelect.mock.calls[0]).toEqual([
      { key: '1', label: '黄金蛋炒饭' }, // option
      [], // parent
    ]);
    expect(balloon).toHaveClass('t-dropdown-leave-to');
  });

  test('disabled', () => {
    const onSelect = jest.fn();
    const options: DropdownOptionsItem[] = [
      { key: '1', label: '黄金蛋炒饭', disabled: true },
      { key: '2', label: '扬州炒饭' },
    ];

    const { container } = render(
      <Dropdown visible onSelect={onSelect} options={options} appendTo={null}>
        <Button>foo bar</Button>
      </Dropdown>,
    );
    const balloon = container.querySelector('.t-word-balloon');
    expect(balloon).toMatchSnapshot();

    expect(onSelect).not.toBeCalled();
    fireEvent.click(balloon!.querySelector('.t-option')!);
    expect(onSelect).not.toBeCalled();
    expect(balloon).not.toHaveClass('t-dropdown-leave-to');
  });
  test('hideOnClick', () => {
    const onSelect = jest.fn();
    const options: DropdownOptionsItem[] = [
      { key: '1', label: '黄金蛋炒饭' },
      { key: '2', label: '扬州炒饭' },
    ];

    const { container } = render(
      <Dropdown
        visible
        hideOnClick={false}
        onSelect={onSelect}
        options={options}
        appendTo={null}>
        <Button>foo bar</Button>
      </Dropdown>,
    );
    const balloon = container.querySelector('.t-word-balloon');
    expect(onSelect).not.toBeCalled();
    fireEvent.click(balloon!.querySelector('.t-option')!);
    expect(onSelect).toBeCalled();
    expect(balloon).not.toHaveClass('t-dropdown-leave-to');
  });
  test('header footer', () => {
    const options: DropdownOptionsItem[] = [
      { key: '1', label: '黄金蛋炒饭' },
      { key: '2', label: '扬州炒饭' },
    ];

    const { container } = render(
      <Dropdown
        visible
        header={<h1>header</h1>}
        footer={<div>footer</div>}
        hideOnClick={false}
        options={options}
        appendTo={null}>
        <Button>foo bar</Button>
      </Dropdown>,
    );
    const balloon = container.querySelector('.t-word-balloon');
    expect(balloon).toMatchSnapshot();
  });

  test('group', () => {
    const options: DropdownOptionsItem[] = [
      {
        label: '饭菜类',
        type: 'group',
        key: 'meals',
        children: [
          {
            key: 'shreddedChicken',
            label: '手撕鸡',
          },
          {
            label: '炒饭',
            key: 'friedRice',
            type: 'group',
            children: [
              {
                key: 'hjdcf',
                label: '黄金蛋炒饭',
              },
              {
                key: 'yzcf',
                label: '扬州炒饭',
              },
            ],
          },
        ],
      },
      {
        key: 'others',
        label: '其他',
      },
    ];

    const { container } = render(
      <Dropdown visible options={options} appendTo={null}>
        <Button>foo bar</Button>
      </Dropdown>,
    );
    const balloon = container.querySelector('.t-word-balloon');
    expect(balloon).toMatchSnapshot();
  });
  test('nest', async () => {
    const onSelect = jest.fn();
    const options: DropdownOptionsItem[] = [
      { key: '1', label: '手撕鸡' },
      {
        key: '2',
        attrs: { className: 'nest-option' },
        label: (
          <Tooltip title={'轮胎3🌟推荐'}>
            <div>蛋炒饭</div>
          </Tooltip>
        ),
        children: [
          { key: '4', label: '黄金蛋炒饭,黄金蛋炒饭' },
          { key: '5', label: '扬州炒饭' },
        ],
      },
      { type: 'divider', key: 'd1' },
      { key: '3', label: '榴莲' },
    ];

    const { container } = render(
      <Dropdown visible onSelect={onSelect} options={options} appendTo={null}>
        <Button>foo bar</Button>
      </Dropdown>,
    );
    fireEvent.mouseEnter(document.querySelector('.nest-option')!);
    await act(() => nextTick());

    const balloon = container.querySelector('.t-word-balloon');
    expect(onSelect).not.toBeCalled();
    expect(balloon).toMatchSnapshot();
  });
});
