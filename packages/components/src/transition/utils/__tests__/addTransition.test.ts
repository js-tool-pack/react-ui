import { LIFE_CIRCLE } from '../../transition.enums';
import { addTransition, getClasses } from '..';

describe('addTransition', () => {
  it('should work', () => {
    jest.useFakeTimers();

    const div = addDiv();
    const on = jest.fn();
    const add = addTransition({
      classes: getClasses('trans', true),
      el: div,
      on,
    });

    expect(on).not.toBeCalled();

    add.start();
    expect(on.mock.calls).toEqual([[LIFE_CIRCLE.ready], [LIFE_CIRCLE.go]]);

    div.dispatchEvent(new Event('transitionstart'));
    expect(on.mock.calls).toEqual([
      [LIFE_CIRCLE.ready],
      [LIFE_CIRCLE.go],
      [LIFE_CIRCLE.start],
    ]);

    div.dispatchEvent(new Event('transitionend'));
    expect(on.mock.calls).toEqual([
      [LIFE_CIRCLE.ready],
      [LIFE_CIRCLE.go],
      [LIFE_CIRCLE.start],
      [LIFE_CIRCLE.after],
    ]);

    div.dispatchEvent(new Event('transitionend'));
    div.dispatchEvent(new Event('transitionstart'));
    div.dispatchEvent(new Event('transitioncancel'));
    expect(on.mock.calls).toEqual([
      [LIFE_CIRCLE.ready],
      [LIFE_CIRCLE.go],
      [LIFE_CIRCLE.start],
      [LIFE_CIRCLE.after],
      [LIFE_CIRCLE.cancel],
    ]);
  });

  it('should cancel', () => {
    const div = addDiv();
    const on = jest.fn();
    const add = addTransition({
      classes: getClasses('trans', true),
      el: div,
      on,
    });

    expect(on).not.toBeCalled();

    add.start();
    div.dispatchEvent(new Event('transitioncancel'));
    expect(on.mock.calls).toEqual([
      [LIFE_CIRCLE.ready],
      [LIFE_CIRCLE.go],
      [LIFE_CIRCLE.cancel],
    ]);

    div.dispatchEvent(new Event('transitionend'));
    div.dispatchEvent(new Event('transitionstart'));
    div.dispatchEvent(new Event('transitioncancel'));
    expect(on.mock.calls).toEqual([
      [LIFE_CIRCLE.ready],
      [LIFE_CIRCLE.go],
      [LIFE_CIRCLE.cancel],
      [LIFE_CIRCLE.after],
      [LIFE_CIRCLE.start],
    ]);
  });

  it('should expired', () => {
    jest.useFakeTimers();
    const div = addDiv();
    const on = jest.fn();
    const add = addTransition({
      classes: getClasses('trans', true),
      el: div,
      on,
    });

    expect(on).not.toBeCalled();

    add.start();
    jest.advanceTimersByTime(300);
    expect(on.mock.calls).toEqual([
      [LIFE_CIRCLE.ready],
      [LIFE_CIRCLE.go],
      [LIFE_CIRCLE.expired],
    ]);
  });

  it('should not expired', () => {
    jest.useFakeTimers();
    const div = addDiv();
    const on = jest.fn();
    const add = addTransition({
      classes: getClasses('trans', true),
      el: div,
      on,
    });

    expect(on).not.toBeCalled();

    add.start();
    div.dispatchEvent(new Event('transitionstart'));
    jest.advanceTimersByTime(300);
    expect(on.mock.calls).toEqual([
      [LIFE_CIRCLE.ready],
      [LIFE_CIRCLE.go],
      [LIFE_CIRCLE.start],
    ]);
  });

  it('should clear', () => {
    const div = addDiv();
    const on = jest.fn();
    const add = addTransition({
      classes: getClasses('trans', true),
      el: div,
      on,
    });

    expect(on).not.toBeCalled();

    add.start();
    add.clearListener();
    div.dispatchEvent(new Event('transitionend'));
    div.dispatchEvent(new Event('transitionstart'));
    div.dispatchEvent(new Event('transitioncancel'));
    expect(on.mock.calls).toEqual([[LIFE_CIRCLE.ready], [LIFE_CIRCLE.go]]);
  });

  function addDiv() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    return div;
  }
});
