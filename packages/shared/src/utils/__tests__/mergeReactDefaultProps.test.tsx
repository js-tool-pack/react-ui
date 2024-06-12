import { render } from '@testing-library/react';
import { mergeReactDefaultProps } from '../';
import React from 'react';

describe('mergeReactDefaultProps', () => {
  test('base', () => {
    const receiveProps = jest.fn();
    const defaultProps = {
      emptyStr: 5,
      undef: 1,
      null: 2,
      zero: 4,
      nan: 3,
    };
    const App: React.FC<any> = React.forwardRef<HTMLDivElement, any>(
      (props: any, ref) => {
        receiveProps(props);
        return <div ref={ref}>1</div>;
      },
    );
    App.defaultProps = defaultProps;
    const props = {
      undef: undefined,
      emptyStr: '',
      null: null,
      nan: NaN,
      zero: 0,
    };
    render(<App {...props} />);
    const result = {
      emptyStr: '',
      null: null,
      nan: NaN,
      undef: 1,
      zero: 0,
    };
    expect(receiveProps.mock.calls[0]).toEqual([result]);

    expect(mergeReactDefaultProps(props, defaultProps as any)).toEqual(result);
  });
});
