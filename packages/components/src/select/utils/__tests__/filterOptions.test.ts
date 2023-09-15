import { filterOptions } from '~/select/utils';
import { SelectOptionsItem } from '~/select';

describe('filterOptions', () => {
  it('should be empty', () => {
    const options: SelectOptionsItem[] = [
      {
        children: [{ label: 'foo', value: 'foo' }],
        type: 'group',
        label: '1',
        key: 1,
      },
      {
        children: [{ label: 'bar', value: 'bar' }],
        type: 'group',
        label: '2',
        key: 2,
      },
    ];
    expect(filterOptions(options, '123')).toEqual([]);
  });

  it('should work', () => {
    const options: SelectOptionsItem[] = [
      {
        children: Array.from({ length: 10 }).map((_, i) => ({
          label: String(i + 10),
          value: i + 10,
        })),
        label: '[10, 20)',
        key: '[10, 20)',
        type: 'group',
      },
      { type: 'divider', key: 'd1' },
      {
        children: Array.from({ length: 10 }).map((_, i) => ({
          label: String(i + 20),
          value: i + 20,
        })),
        label: '[20, 30)',
        key: '[20, 30)',
        type: 'group',
      },
    ];
    expect(filterOptions(options, '1')).toEqual([
      {
        children: [
          { label: '10', value: 10 },
          { label: '11', value: 11 },
          { label: '12', value: 12 },
          { label: '13', value: 13 },
          { label: '14', value: 14 },
          { label: '15', value: 15 },
          { label: '16', value: 16 },
          { label: '17', value: 17 },
          { label: '18', value: 18 },
          { label: '19', value: 19 },
        ],
        label: '[10, 20)',
        key: '[10, 20)',
        type: 'group',
      },
      {
        children: [{ label: '21', value: 21 }],
        label: '[20, 30)',
        key: '[20, 30)',
        type: 'group',
      },
    ] satisfies SelectOptionsItem[]);
  });

  test('custom filter', () => {
    const options: SelectOptionsItem[] = [
      {
        children: [{ label: 'foo', value: 'foo', extra: '321' }],
        type: 'group',
        label: '1',
        key: 1,
      },
      {
        children: [
          { value: 'bar2', label: 'bar', extra: '123' },
          { value: 'bar3', label: 'bar', extra: '333' },
        ],
        type: 'group',
        label: '2',
        key: 2,
      },
    ];
    expect(
      filterOptions(options, '123', (pattern, option) => {
        return option.extra === pattern;
      }),
    ).toEqual([
      {
        children: [{ value: 'bar2', label: 'bar', extra: '123' }],
        type: 'group',
        label: '2',
        key: 2,
      },
    ] satisfies SelectOptionsItem[]);
  });
});
