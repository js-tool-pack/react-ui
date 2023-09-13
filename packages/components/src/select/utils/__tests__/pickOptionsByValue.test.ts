import { pickOptionsByValue } from '~/select/utils';
import { SelectOption } from '~/select';

describe('pickOptionsByValue', () => {
  test('value is undefined', () => {
    expect(pickOptionsByValue([], undefined)).toEqual([]);
    expect(pickOptionsByValue([{ label: 1, value: 1 }], undefined)).toEqual([]);
  });

  test('value is not array', () => {
    expect(pickOptionsByValue([], 1)).toEqual([]);
    expect(pickOptionsByValue([{ label: 1, value: 1 }], 1)).toEqual([
      { label: 1, value: 1 },
    ] satisfies SelectOption[]);
    expect(
      pickOptionsByValue(
        [
          { label: 1, value: 1 },
          { type: 'divider', key: 2 },
        ],
        1,
      ),
    ).toEqual([{ label: 1, value: 1 }] satisfies SelectOption[]);
  });

  test('value is array', () => {
    expect(pickOptionsByValue([], [1])).toEqual([]);
    expect(pickOptionsByValue([{ label: 1, value: 1 }], [1])).toEqual([
      { label: 1, value: 1 },
    ] satisfies SelectOption[]);
    expect(
      pickOptionsByValue(
        [
          { label: 1, value: 1 },
          { type: 'divider', key: 2 },
        ],
        [1],
      ),
    ).toEqual([{ label: 1, value: 1 }] satisfies SelectOption[]);
    expect(
      pickOptionsByValue(
        [
          { label: 1, value: 1 },
          { label: 1, value: 2 },
          { type: 'divider', key: 11 },
          { label: 1, value: 3 },
        ],
        [1, 3],
      ),
    ).toEqual([
      { label: 1, value: 1 },
      { label: 1, value: 3 },
    ] satisfies SelectOption[]);
  });
});
