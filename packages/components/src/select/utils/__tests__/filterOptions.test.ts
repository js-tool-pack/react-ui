import { filterOptions } from '~/select/utils';
import { SelectOptionsItem } from '~/select';

describe('filterOptions', () => {
  it('should be empty', () => {
    const options: SelectOptionsItem[] = [
      {
        type: 'group',
        label: '1',
        key: 1,
        children: [{ label: 'foo', value: 'foo' }],
      },
      {
        type: 'group',
        label: '2',
        key: 2,
        children: [{ label: 'bar', value: 'bar' }],
      },
    ];
    expect(filterOptions(options, '123')).toEqual([]);
  });

  it('should work', () => {
    const options: SelectOptionsItem[] = [
      {
        type: 'group',
        key: '[10, 20)',
        label: '[10, 20)',
        children: Array.from({ length: 10 }).map((_, i) => ({
          value: i + 10,
          label: String(i + 10),
        })),
      },
      { type: 'divider', key: 'd1' },
      {
        type: 'group',
        key: '[20, 30)',
        label: '[20, 30)',
        children: Array.from({ length: 10 }).map((_, i) => ({
          value: i + 20,
          label: String(i + 20),
        })),
      },
    ];
    expect(filterOptions(options, '1')).toEqual([
      {
        type: 'group',
        label: '[10, 20)',
        key: '[10, 20)',
        children: [
          { value: 10, label: '10' },
          { value: 11, label: '11' },
          { value: 12, label: '12' },
          { value: 13, label: '13' },
          { value: 14, label: '14' },
          { value: 15, label: '15' },
          { value: 16, label: '16' },
          { value: 17, label: '17' },
          { value: 18, label: '18' },
          { value: 19, label: '19' },
        ],
      },
      {
        type: 'group',
        label: '[20, 30)',
        key: '[20, 30)',
        children: [{ value: 21, label: '21' }],
      },
    ] satisfies SelectOptionsItem[]);
  });

  test('custom filter', () => {
    const options: SelectOptionsItem[] = [
      {
        type: 'group',
        label: '1',
        key: 1,
        children: [{ label: 'foo', value: 'foo', extra: '321' }],
      },
      {
        type: 'group',
        label: '2',
        key: 2,
        children: [
          { label: 'bar', value: 'bar2', extra: '123' },
          { label: 'bar', value: 'bar3', extra: '333' },
        ],
      },
    ];
    expect(
      filterOptions(options, '123', (pattern, option) => {
        return option.extra === pattern;
      }),
    ).toEqual([
      {
        type: 'group',
        label: '2',
        key: 2,
        children: [{ label: 'bar', value: 'bar2', extra: '123' }],
      },
    ] satisfies SelectOptionsItem[]);
  });
});
