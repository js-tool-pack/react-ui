import { createHtmlElement } from '@tool-pack/dom';
import { calcPlacement } from '~/popover/utils';

describe('calcPlacement', () => {
  it('should return top', () => {
    const trigger = createHtmlElement('div', {
      props: { style: { height: '10px', width: '10px' } },
      parent: document.body,
    });
    const balloon = createHtmlElement('div', {
      props: { style: { height: '100px', width: '100px' } },
      parent: document.body,
    });

    // 正常应该是返回 bottom 的
    expect(calcPlacement(trigger, balloon)).toEqual('top');
  });
});
