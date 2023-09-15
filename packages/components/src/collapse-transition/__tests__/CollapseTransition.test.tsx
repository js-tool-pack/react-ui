import { fireEvent, render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { CollapseTransition } from '..';
import Demo from '../demo/basic';

describe('CollapseTransition', () => {
  testAttrs(({ attrs }) => (
    <CollapseTransition attrs={attrs}>
      <div>foo bar</div>
    </CollapseTransition>
  ));

  test('basic', () => {
    const { container } = render(<Demo />);
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(container.querySelector('.t-button')!);
    expect(container.firstChild).toMatchSnapshot();
  });
});
