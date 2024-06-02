import { render } from '@testing-library/react';
import { Transition } from '~/transition';
import { testAttrs } from '~/testAttrs';
import { TransitionGroup } from '..';

describe('TransitionGroup', () => {
  testAttrs(TransitionGroup);

  test('snap', () => {
    const { container } = render(
      <TransitionGroup>
        <div>foo bar</div>
        <div>foo-bar</div>
      </TransitionGroup>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  test('transition snap', () => {
    const { container } = render(
      <TransitionGroup>
        <Transition appear>
          <div>foo bar</div>
        </Transition>
        <Transition>
          <div>foo-bar</div>
        </Transition>
      </TransitionGroup>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
