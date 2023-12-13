import { fireEvent, render, act } from '@testing-library/react';
import { DropdownOptionsItem, Dropdown } from '..';
import { nextTick } from '@tool-pack/basic';
import { Tooltip } from '~/tooltip';
import { Button } from '~/button';

describe('Dropdown', () => {
  // 模拟 ResizeObserver，ResizeObserver 不存在于 jsdom 中
  const MockObserverInstance: ResizeObserver = {
    disconnect: jest.fn(),
    unobserve: jest.fn(),
    observe: jest.fn(),
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
        attrs={{ style: { background: '#fff' }, className: 'foo', onClick }}
        appendTo={null}
        options={[]}
        visible
      >
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
      { label: '黄金蛋炒饭', key: '1' },
      { type: 'divider', key: 'd' },
      { label: '扬州炒饭', key: '2' },
    ];

    const { container } = render(
      <Dropdown onSelect={onSelect} options={options} appendTo={null} visible>
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
      { label: '黄金蛋炒饭', key: '1' }, // option
      [], // parent
    ]);
    expect(balloon).toHaveClass('t-dropdown-leave-to');
  });

  test('disabled', () => {
    const onSelect = jest.fn();
    const options: DropdownOptionsItem[] = [
      { label: '黄金蛋炒饭', disabled: true, key: '1' },
      { label: '扬州炒饭', key: '2' },
    ];

    const { container } = render(
      <Dropdown onSelect={onSelect} options={options} appendTo={null} visible>
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
      { label: '黄金蛋炒饭', key: '1' },
      { label: '扬州炒饭', key: '2' },
    ];

    const { container } = render(
      <Dropdown
        hideOnClick={false}
        onSelect={onSelect}
        options={options}
        appendTo={null}
        visible
      >
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
      { label: '黄金蛋炒饭', key: '1' },
      { label: '扬州炒饭', key: '2' },
    ];

    const { container } = render(
      <Dropdown
        footer={<div>footer</div>}
        header={<h1>header</h1>}
        hideOnClick={false}
        options={options}
        appendTo={null}
        visible
      >
        <Button>foo bar</Button>
      </Dropdown>,
    );
    const balloon = container.querySelector('.t-word-balloon');
    expect(balloon).toMatchSnapshot();
  });

  test('group', () => {
    const options: DropdownOptionsItem[] = [
      {
        children: [
          {
            key: 'shreddedChicken',
            label: '手撕鸡',
          },
          {
            children: [
              {
                label: '黄金蛋炒饭',
                key: 'hjdcf',
              },
              {
                label: '扬州炒饭',
                key: 'yzcf',
              },
            ],
            key: 'friedRice',
            type: 'group',
            label: '炒饭',
          },
        ],
        type: 'group',
        label: '饭菜类',
        key: 'meals',
      },
      {
        key: 'others',
        label: '其他',
      },
    ];

    const { container } = render(
      <Dropdown options={options} appendTo={null} visible>
        <Button>foo bar</Button>
      </Dropdown>,
    );
    const balloon = container.querySelector('.t-word-balloon');
    expect(balloon).toMatchSnapshot();
  });
  test('nest', async () => {
    const onSelect = jest.fn();
    const options: DropdownOptionsItem[] = [
      { label: '手撕鸡', key: '1' },
      {
        children: [
          { label: '黄金蛋炒饭,黄金蛋炒饭', key: '4' },
          { label: '扬州炒饭', key: '5' },
        ],
        label: (
          <Tooltip title={'轮胎3🌟推荐'}>
            <div>蛋炒饭</div>
          </Tooltip>
        ),
        attrs: { className: 'nest-option' },
        key: '2',
      },
      { type: 'divider', key: 'd1' },
      { label: '榴莲', key: '3' },
    ];

    const { container } = render(
      <Dropdown onSelect={onSelect} options={options} appendTo={null} visible>
        <Button>foo bar</Button>
      </Dropdown>,
    );
    fireEvent.mouseEnter(document.querySelector('.nest-option')!);
    await act(() => nextTick());

    const balloon = container.querySelector('.t-word-balloon');
    expect(onSelect).not.toBeCalled();
    expect(balloon).toMatchSnapshot();
  });
  it('修复测试 在鼠标右击启动的情况下，点击选项关闭窗体后无法再次鼠标右击开启 #79', () => {
    jest.useFakeTimers();
    const options: DropdownOptionsItem[] = [
      { label: '黄金蛋炒饭', key: '1' },
      { label: '扬州炒饭', key: '2' },
    ];
    const { container } = render(
      <Dropdown trigger="contextmenu" options={options}>
        <div>foo bar</div>
      </Dropdown>,
    );

    expect(getBalloon()).toBeNull();

    // 第一步：开启
    fireEvent.contextMenu(container.firstChild!);
    act(() => jest.advanceTimersByTime(500));
    act(() => jest.advanceTimersByTime(500));
    expect(getBalloon()).not.toBeNull();
    expect(getBalloon()).not.toHaveClass('t-transition--invisible');

    // 第二步：点击选项
    fireEvent.click(document.querySelector('.t-dropdown-option')!);
    act(() => jest.advanceTimersByTime(500));
    act(() => jest.advanceTimersByTime(500));
    expect(getBalloon()).toHaveClass('t-transition--invisible');

    // 第三步：再次开启
    fireEvent.contextMenu(container.firstChild!);
    act(() => jest.advanceTimersByTime(500));
    act(() => jest.advanceTimersByTime(500));
    // bug 所在
    expect(getBalloon()).not.toHaveClass('t-transition--invisible');

    function getBalloon(): HTMLDivElement | null {
      return document.querySelector('.t-word-balloon');
    }
  });
});
