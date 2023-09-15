import { flattenOptions } from '~/select/utils';
import { SelectOption } from '~/select';

describe('flattenOptions', () => {
  it('should work', () => {
    expect(
      flattenOptions([
        {
          children: [
            { disabled: true, label: '1-1', value: '1-1' },
            { type: 'divider', key: 'd1' },
            { disabled: true, label: '1-2', value: '1-2' },
          ],
          type: 'group',
          label: '1',
          key: 1,
        },
        {
          children: [
            { label: '2-1', value: '2-1' },
            { type: 'divider', key: 'd2' },
            { label: '2-2', value: '2-2' },
          ],
          type: 'group',
          label: '2',
          key: 2,
        },
        { type: 'divider', key: 'd3' },
        { label: '3', value: '3' },
      ]),
    ).toEqual([
      { disabled: true, label: '1-1', value: '1-1' },
      { disabled: true, label: '1-2', value: '1-2' },
      { label: '2-1', value: '2-1' },
      { label: '2-2', value: '2-2' },
      { label: '3', value: '3' },
    ] satisfies SelectOption[]);
  });

  it('should be skip the disabled option', () => {
    expect(
      flattenOptions(
        [
          {
            children: [
              { disabled: true, label: '1-1', value: '1-1' },
              { type: 'divider', key: 'd1' },
              { disabled: true, label: '1-2', value: '1-2' },
            ],
            type: 'group',
            label: '1',
            key: 1,
          },
          {
            children: [
              { label: '2-1', value: '2-1' },
              { type: 'divider', key: 'd2' },
              { label: '2-2', value: '2-2' },
            ],
            type: 'group',
            label: '2',
            key: 2,
          },
          { type: 'divider', key: 'd3' },
          { label: '3', value: '3' },
        ],
        (option) => !option.disabled,
      ),
    ).toEqual([
      { label: '2-1', value: '2-1' },
      { label: '2-2', value: '2-2' },
      { label: '3', value: '3' },
    ] satisfies SelectOption[]);
  });
});
