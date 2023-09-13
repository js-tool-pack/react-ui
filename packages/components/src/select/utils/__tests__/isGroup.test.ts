import { isGroup } from '~/select/utils';

describe('isGroup', () => {
  it('should be true', () => {
    expect(isGroup({ type: 'group', label: '1', key: 1 })).toBeTruthy();
  });
  it('should be false', () => {
    expect(isGroup({ type: 'divider', key: 1 })).toBeFalsy();
    expect(isGroup({ label: '1', value: 1 })).toBeFalsy();
  });
});
