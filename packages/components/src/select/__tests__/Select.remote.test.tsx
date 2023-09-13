import { fireEvent, render } from '@testing-library/react';
import { useState } from 'react';
import { Select, SelectOptionsItem } from '~/select';
import { getBalloon, getFilterInput } from './utils';

describe('Select.remote', () => {
  it('should display the filter-input element when Select is in the open state', () => {
    expect(
      render(<Select options={[]} remote visible />).container.firstChild,
    ).toMatchSnapshot();
    expect(getBalloon()).toMatchSnapshot();
  });

  it('should invoke onSearch when input', () => {
    const onSearch = jest.fn();
    render(<Select onSearch={onSearch} options={[]} visible remote />);

    expect(onSearch).not.toBeCalled();

    fireEvent.change(getFilterInput(), { target: { value: 'a' } });
    expect(onSearch).nthCalledWith(1, 'a');

    fireEvent.change(getFilterInput(), { target: { value: 'b' } });
    expect(onSearch).nthCalledWith(2, 'b');
  });

  it('should not apply the filter when remote is set to true', () => {
    const filter = jest.fn();
    render(<Select filter={filter} options={[]} visible remote />);

    expect(filter).not.toBeCalled();

    fireEvent.change(getFilterInput(), { target: { value: 'a' } });
    expect(filter).not.toBeCalled();
  });

  it('should invoke onSearch when input', () => {
    const onSearch = jest.fn();
    render(<Select onSearch={onSearch} options={[]} visible remote />);

    expect(onSearch).not.toBeCalled();

    fireEvent.change(getFilterInput(), { target: { value: 'a' } });
    expect(onSearch).nthCalledWith(1, 'a');

    fireEvent.change(getFilterInput(), { target: { value: 'b' } });
    expect(onSearch).nthCalledWith(2, 'b');
  });

  test('all', () => {
    render(<App />);
    expect(getBalloon()).toMatchSnapshot();

    fireEvent.change(getFilterInput(), { target: { value: '1' } });
    expect(getBalloon()).toMatchSnapshot();

    fireEvent.change(getFilterInput(), { target: { value: '5' } });
    expect(getBalloon()).toMatchSnapshot();

    function App() {
      const [options, setOptions] = useState<SelectOptionsItem[]>([]);

      return (
        <Select
          onSearch={onSearch}
          options={options}
          empty="空空如也"
          visible
          remote
        />
      );

      function onSearch(pattern: string): void {
        if (pattern === '1') {
          setOptions([{ label: '1', value: 1 }]);
          return;
        }
        setOptions([{ label: 'other', value: 2 }]);
        return;
      }
    }
  });
});
