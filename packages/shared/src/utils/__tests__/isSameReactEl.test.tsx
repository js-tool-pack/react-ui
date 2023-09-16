import { isSameReactEl } from '@pkg/shared';

describe('isSameReactEl', () => {
  const isSame = isSameReactEl;
  it('should return false when one of the two values is not a ReactElement', () => {
    expect(isSame(true, true)).toBeFalsy();
    expect(isSame(false, true)).toBeFalsy();
    expect(isSame(true, false)).toBeFalsy();
    expect(isSame(false, false)).toBeFalsy();
    expect(isSame(false, <div></div>)).toBeFalsy();
    expect(isSame(<div></div>, true)).toBeFalsy();
  });

  it('should return false', () => {
    expect(isSame(<div></div>, <div></div>)).toBeFalsy();
    expect(isSame(<div key={1}></div>, <div key={2}></div>)).toBeFalsy();
    expect(isSame(<div key={1}></div>, <span key={1}></span>)).toBeFalsy();
  });

  it('should return true', () => {
    const div = <div></div>;
    expect(isSame(div, div)).toBeTruthy();
    expect(isSame(<div key={1}></div>, <div key={1}></div>)).toBeTruthy();
    expect(isSame(<div key={1}>123</div>, <div key={1}>456</div>)).toBeTruthy();
  });
});
