import { testAttrs } from '~/testAttrs';
import { TransitionGroup } from '..';
import { render } from '@testing-library/react';
import { Transition } from '~/transition';

describe('TransitionGroup', () => {
  testAttrs(TransitionGroup);

  test('snap', () => {
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
