import { fromOuterEvent } from '@pkg/shared';

describe('fromOuterEvent', () => {
  test('inner', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    document.body.appendChild(div1);
    document.body.appendChild(div2);

    const onClick = jest.fn();
    fromOuterEvent(div1, 'click').subscribe(onClick);

    expect(onClick).not.toBeCalled();

    // 点击外部
    document.body.click();
    expect(onClick).toBeCalled();
    expect(onClick.mock.calls.length).toBe(1);

    div2.click();
    expect(onClick.mock.calls.length).toBe(2);

    // 点击内部
    div1.click();
    expect(onClick.mock.calls.length).toBe(2);
  });

  test('getInner', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    document.body.appendChild(div1);
    document.body.appendChild(div2);

    const onClick = jest.fn();
    fromOuterEvent(() => div1, 'click').subscribe(onClick);

    expect(onClick).not.toBeCalled();

    // 点击外部
    document.body.click();
    expect(onClick).toBeCalled();
    expect(onClick.mock.calls.length).toBe(1);

    div2.click();
    expect(onClick.mock.calls.length).toBe(2);

    // 点击内部
    div1.click();
    expect(onClick.mock.calls.length).toBe(2);
  });

  test('getInners', () => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    document.body.appendChild(div1);
    document.body.appendChild(div2);

    const onClick = jest.fn();
    fromOuterEvent(() => [div1, div2], 'click').subscribe(onClick);

    expect(onClick).not.toBeCalled();

    // 点击外部
    document.body.click();
    expect(onClick).toBeCalled();
    expect(onClick.mock.calls.length).toBe(1);

    // 点击内部
    div2.click();
    expect(onClick.mock.calls.length).toBe(1);

    div1.click();
    expect(onClick.mock.calls.length).toBe(1);

    expect(onClick.mock.calls.map((c) => c[0])).toEqual([new MouseEvent('')]);
  });
});
