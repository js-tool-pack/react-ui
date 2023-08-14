import { render, fireEvent } from '@testing-library/react';
import Demo from '../demo/basic';

describe('CollapseTransition', () => {
  test('basic', () => {
    const { container } = render(<Demo />);
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(container.querySelector('.t-button')!);
    expect(container.firstChild).toMatchSnapshot();
  });
});
