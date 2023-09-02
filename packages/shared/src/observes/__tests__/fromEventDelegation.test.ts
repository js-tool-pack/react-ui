import { createHtmlElement } from '@tool-pack/dom';
import { fromEventDelegation } from '@pkg/shared';

describe('fromEventDelegation', () => {
  test('basic', () => {
    const div = createHtmlElement('div', { parent: document.body });
    const onClick = jest.fn();
    fromEventDelegation(div, 'click').subscribe(onClick);

    expect(onClick).not.toBeCalled();

    document.body.click();
    expect(onClick).not.toBeCalled();

    div.click();
    expect(onClick).toBeCalled();
  });

  test('capture', () => {
    const div = createHtmlElement('div', { parent: document.body });
    const onClick = jest.fn();
    fromEventDelegation(div, 'click', { capture: true }).subscribe(onClick);

    expect(onClick).not.toBeCalled();

    document.body.click();
    expect(onClick).not.toBeCalled();

    div.click();
    expect(onClick).toBeCalled();
  });

  test('getTarget', () => {
    const div = createHtmlElement('div', { parent: document.body });
    const onClick = jest.fn();
    fromEventDelegation(() => div, 'click').subscribe(onClick);

    expect(onClick).not.toBeCalled();

    document.body.click();
    expect(onClick).not.toBeCalled();

    div.click();
    expect(onClick).toBeCalled();
  });

  test('child', () => {
    const child = createHtmlElement('div');
    const parent = createHtmlElement('div', {
      children: [child],
      parent: document.body,
    });
    const onClick = jest.fn();
    fromEventDelegation(parent, 'click').subscribe(onClick);

    expect(onClick).not.toBeCalled();

    document.body.click();
    expect(onClick).not.toBeCalled();

    parent.click();
    expect(onClick).toBeCalled();

    onClick.mockClear();
    expect(onClick).not.toBeCalled();
    child.click();
    expect(onClick).toBeCalled();

    onClick.mockClear();
    child.addEventListener('click', (e) => e.stopPropagation());
    child.click();
    expect(onClick).not.toBeCalled();
  });

  test('child capture', () => {
    const child = createHtmlElement('div');
    const parent = createHtmlElement('div', {
      children: [child],
      parent: document.body,
    });
    const onClick = jest.fn();
    fromEventDelegation(parent, 'click', { capture: true }).subscribe(onClick);

    expect(onClick).not.toBeCalled();

    document.body.click();
    expect(onClick).not.toBeCalled();

    parent.click();
    expect(onClick).toBeCalled();

    onClick.mockClear();
    expect(onClick).not.toBeCalled();
    child.click();
    expect(onClick).toBeCalled();

    onClick.mockClear();
    child.addEventListener('click', (e) => e.stopPropagation());
    child.click();
    // capture 在捕获阶段处于第一顺位，是无法被拦截的
    expect(onClick).toBeCalled();
  });
});
