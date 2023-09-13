import { isDivider } from '~/select/utils';

describe('isDivider', () => {
  it('should be true', () => {
    expect(isDivider({ type: 'divider', key: 1 })).toBe(true);
  });
  it('should be false', () => {
    expect(isDivider({ type: 'group', label: '1', key: 1 })).toBe(false);
    expect(isDivider({ label: '1', value: 1 })).toBe(false);
  });
});
