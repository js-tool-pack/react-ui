import { applyTranslation } from '~/transition-group/utils';
import { Writeable } from '@tool-pack/types';

describe('applyTranslation', () => {
  it('should work', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);

    const rect = div.getBoundingClientRect();
    expect(applyTranslation(div, rect, div.getBoundingClientRect())).toBe(
      false,
    );

    const rect2: Writeable<DOMRect> = { ...div.getBoundingClientRect() };
    rect2.left += 1;
    expect(applyTranslation(div, rect, rect2)).toBe(true);
  });
});
