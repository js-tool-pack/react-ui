import { fireEvent, render } from '@testing-library/react';
import HolderDemo from '../demo/useLoadingHolder';
import GlobalDemo from '../demo/global';
import BasicDemo from '../demo/basic';

describe('Loading', () => {
  test('basic', async () => {
    const { container } = render(<BasicDemo />);
    expect(document.body.querySelector('.t-loading__ref')).toMatchSnapshot();
    fireEvent.click(container.querySelector('.t-button')!);
    expect(document.body.querySelector('.t-loading__ref')).toMatchSnapshot();
  });

  test('global', async () => {
    const { container } = render(<GlobalDemo />);
    const getLoading = () => document.body.querySelector('.t-loading');
    expect(getLoading()).toBeNull();
    fireEvent.click(container.querySelector('.t-button')!);
    expect(getLoading()).not.toBeNull();
  });

  test('holder', async () => {
    const { container } = render(<HolderDemo />);
    const getLoading = () => document.body.querySelector('.t-loading');
    expect(getLoading()).toBeNull();
    fireEvent.click(container.querySelector('.t-button')!);
    expect(getLoading()).not.toBeNull();
  });
});
