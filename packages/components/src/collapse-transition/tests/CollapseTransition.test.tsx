import { render, fireEvent } from '@testing-library/react';
import Demo from '../demo/basic';
import { testAttrs } from '~/testAttrs';
import { CollapseTransition } from '..';

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
