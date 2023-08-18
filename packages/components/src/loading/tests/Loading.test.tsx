import BasicDemo from '../demo/basic';
import GlobalDemo from '../demo/global';
import HolderDemo from '../demo/useLoadingHolder';
import { render, fireEvent } from '@testing-library/react';

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
