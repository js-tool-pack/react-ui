import { moveItem } from '../';

describe('moveItem', () => {
  test('base', () => {
    expect(moveItem([0, 1, 2, 3, 4, 5, 6, 7], 0, 7)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 0,
    ]);
    expect(moveItem([0, 1, 2, 3, 4, 5, 6], 2, 5)).toEqual([
      0, 1, 3, 4, 5, 2, 6,
    ]);
  });
  test('over', () => {
    expect(moveItem([0, 1, 2, 3, 4, 5, 6], -5, -3)).toEqual([
      0, 1, 3, 4, 2, 5, 6,
    ]);
    expect(moveItem([0, 1, 2, 3, 4, 5, 6], 0, 8)).toEqual([
      1, 2, 3, 4, 5, 6, 0,
    ]);
    expect(moveItem([0, 1, 2, 3, 4, 5, 6], -1, 1)).toEqual([
      0, 6, 1, 2, 3, 4, 5,
    ]);
  });
});
