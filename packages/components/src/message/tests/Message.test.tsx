import Demo from '../demo/useMessageHolder';
import { render, fireEvent } from '@testing-library/react';

describe('Message', () => {
  test('holder', async () => {
    const { container } = render(<Demo />);
    const getRoot = () => document.body.querySelector('.t-transition-group');
    expect(getRoot()).toMatchSnapshot();
    fireEvent.click(container.querySelector('.t-button')!);
    expect(getRoot()).toMatchSnapshot();
  });
});
