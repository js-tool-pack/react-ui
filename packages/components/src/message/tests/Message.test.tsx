import Demo from '../demo/useMessageHolder';
import { render, fireEvent } from '@testing-library/react';
import { Message } from '..';
import { testAttrs } from '~/testAttrs';

describe('Message', () => {
  testAttrs(({ attrs }) => <Message type="info" attrs={attrs} />);

  test('holder', async () => {
    const { container } = render(<Demo />);
    const getRoot = () => document.body.querySelector('.t-transition-group');
    expect(getRoot()).toMatchSnapshot();
    fireEvent.click(container.querySelector('.t-button')!);
    expect(getRoot()).toMatchSnapshot();
  });
});
