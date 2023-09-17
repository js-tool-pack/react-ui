import {
  TRANSITION_LIFE_CIRCLE as Life,
  TRANSITION_STATUS as Status,
  transitionCBAdapter,
} from '~/transition';
import { LEAVE_KEYS, ENTER_KEYS, ORDERS } from '..';

describe('transitionCBAdapter', () => {
  it('should log', () => {
    const log = (window.console.log = jest.fn());
    const cb = transitionCBAdapter({}, true);
    const text = 'transitionCbAdapter:';

    cb(document.body, Status.show, Life.before);
    expect(log).toBeCalledWith(text, Status[Status.show], Life[Life.before]);

    cb(document.body, Status.hide, Life.before);
    expect(log).toBeCalledWith(text, Status[Status.hide], Life[Life.before]);

    cb(document.body, Status.invisible, Life.before);
    expect(log).toBeCalledWith(
      text,
      Status[Status.invisible],
      Life[Life.before],
    );
  });

  it('should work', () => {
    const matches: Parameters<typeof transitionCBAdapter>[0] = {
      onInvisible: jest.fn(),
      onIdle: jest.fn(),
    };
    LEAVE_KEYS.forEach((key) => (matches[key] = jest.fn()));
    ENTER_KEYS.forEach((key) => (matches[key] = jest.fn()));
    const cb = transitionCBAdapter(matches);

    expect.assertions(
      Object.keys(matches).length * 2 + ENTER_KEYS.length * 2 + 2,
    );

    Object.entries(matches).forEach(([, k]) => expect(k).not.toBeCalled());

    cb(document.body, Status.invisible, Life.before);
    expect(matches.onInvisible).toBeCalled();

    cb(document.body, Status.idle, Life.before);
    expect(matches.onIdle).toBeCalled();

    ENTER_KEYS.forEach((key, i) => {
      cb(document.body, Status.show, ORDERS[i]!);
      expect(matches[key]).toBeCalled();
    });
    LEAVE_KEYS.forEach((key, i) => {
      cb(document.body, Status.hide, ORDERS[i]!);
      expect(matches[key]).toBeCalled();
    });

    Object.entries(matches).forEach(([, k]) => expect(k).toBeCalled());
  });
});
