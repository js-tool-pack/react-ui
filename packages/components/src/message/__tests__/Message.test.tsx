import { fireEvent, render } from '@testing-library/react';
import Demo from '../demo/useMessageHolder';
import { testAttrs } from '~/testAttrs';
import { Message } from '..';

describe('Message', () => {
  testAttrs(({ attrs }) => <Message attrs={attrs} type="info" />);

  test('holder', async () => {
    const { container } = render(<Demo />);
    const getRoot = () => document.body.querySelector('.t-transition-group');
    expect(getRoot()).toMatchSnapshot();
    fireEvent.click(container.querySelector('.t-button')!);
    expect(getRoot()).toMatchSnapshot();
  });
});
