import { isValueChanged } from '~/select/utils';

describe('isValueChanged', () => {
  test('value is undefined', () => {
    expect(isValueChanged(undefined, [])).toBe(false);
    expect(
      isValueChanged(undefined, [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
      ]),
    ).toBe(false);
  });

  test('value is not array', () => {
    expect(
      isValueChanged('1', [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
      ]),
    ).toBe(true);
    expect(isValueChanged('1', [])).toBe(true);
    expect(
      isValueChanged(1, [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
      ]),
    ).toBe(true);
    expect(
      isValueChanged(1, [
        { value: 2, label: 2 },
        { value: 1, label: 1 },
      ]),
    ).toBe(true);
    expect(isValueChanged(1, [{ value: 1, label: 1 }])).toBe(false);
  });

  test('value is array', () => {
    expect(
      isValueChanged(
        ['1'],
        [
          { value: 1, label: 1 },
          { value: 2, label: 2 },
        ],
      ),
    ).toBe(true);
    expect(isValueChanged(['1'], [])).toBe(true);
    expect(
      isValueChanged(
        [1],
        [
          { value: 1, label: 1 },
          { value: 2, label: 2 },
        ],
      ),
    ).toBe(true);
    expect(
      isValueChanged(
        [1],
        [
          { value: 2, label: 2 },
          { value: 1, label: 1 },
        ],
      ),
    ).toBe(true);
    expect(
      isValueChanged(
        [1, 3],
        [
          { value: 2, label: 2 },
          { value: 1, label: 1 },
        ],
      ),
    ).toBe(true);
    expect(
      isValueChanged(
        [1, 2, 3],
        [
          { value: 2, label: 2 },
          { value: 1, label: 1 },
        ],
      ),
    ).toBe(true);
    expect(
      isValueChanged(
        [1, 2],
        [
          { value: 2, label: 2 },
          { value: 1, label: 1 },
        ],
      ),
    ).toBe(true);
    expect(
      isValueChanged(
        [2, 1, 3],
        [
          { value: 2, label: 2 },
          { value: 1, label: 1 },
        ],
      ),
    ).toBe(true);
    expect(
      isValueChanged(
        [2, 1],
        [
          { value: 2, label: 2 },
          { value: 1, label: 1 },
        ],
      ),
    ).toBe(false);
    expect(isValueChanged([1], [{ value: 1, label: 1 }])).toBe(false);
  });
});
