import { createHtmlElement } from '@tool-pack/dom';
import { calcPosition } from '~/popover/utils';
import { Placement_12 } from '@pkg/shared';

describe('calcPosition', () => {
  it('should work', () => {
    const trigger = createHtmlElement('div', {
      props: { style: { height: '10px', width: '10px' } },
      parent: document.body,
    });
    const balloon = createHtmlElement('div', {
      props: { style: { height: '100px', width: '100px' } },
      parent: document.body,
    });

    // 因为在 jsdom 环境下获取的 offsetWidth offsetHeight 都是 0
    expect(calcPosition(trigger, balloon)).toEqual({
      y: -10,
      x: 0,
    });

    // top
    expect(calc('top')).toEqual({ y: 190, x: 200 });
    expect(calc('top-start')).toEqual({ y: 190, x: 200 });
    expect(calc('top-end')).toEqual({ y: 190, x: 200 });

    // bottom
    expect(calc('bottom')).toEqual({ y: 210, x: 200 });
    expect(calc('bottom-start')).toEqual({ y: 210, x: 200 });
    expect(calc('bottom-end')).toEqual({ y: 210, x: 200 });

    // left
    expect(calc('left')).toEqual({ y: 200, x: 190 });
    expect(calc('left-start')).toEqual({ y: 200, x: 190 });
    expect(calc('left-end')).toEqual({ y: 200, x: 190 });

    // right
    expect(calc('right')).toEqual({ y: 200, x: 210 });
    expect(calc('right-start')).toEqual({ y: 200, x: 210 });
    expect(calc('right-end')).toEqual({ y: 200, x: 210 });

    function calc(p: Placement_12) {
      return calcPosition(trigger, balloon, p, 10, [200, 200]);
    }
  });
});
