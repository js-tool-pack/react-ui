import { getClasses } from '..';

describe('getClasses', () => {
  it('should work', () => {
    expect(getClasses('trans', true)).toEqual({
      active: 'trans-enter-active',
      from: 'trans-enter-from',
      to: 'trans-enter-to',
    });
    expect(getClasses('trans', false)).toEqual({
      active: 'trans-leave-active',
      from: 'trans-leave-from',
      to: 'trans-leave-to',
    });
  });
});
