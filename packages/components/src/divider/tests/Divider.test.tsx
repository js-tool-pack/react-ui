import { render } from '@testing-library/react';
import { Divider } from '..';
import { testAttrs } from '~/testAttrs';

describe('Divider', () => {
  testAttrs(Divider);

  test('basic', () => {
    expect(render(<Divider />).container.firstChild).toMatchSnapshot();
    expect(
      render(<Divider>hello world</Divider>).container.firstChild,
    ).toMatchSnapshot();
  });

  test('placement', () => {
    const def = render(<Divider>hello world</Divider>).container.firstChild;
    expect(def).toHaveClass('t-divider--center');
    expect(def).not.toHaveClass('t-divider--left');
    expect(def).not.toHaveClass('t-divider--right');

    expect(
      render(<Divider placement="center">hello world</Divider>).container
        .firstChild,
    ).toHaveClass('t-divider--center');
    expect(
      render(<Divider placement="left">hello world</Divider>).container
        .firstChild,
    ).toHaveClass('t-divider--left');
    expect(
      render(<Divider placement="right">hello world</Divider>).container
        .firstChild,
    ).toHaveClass('t-divider--right');
  });
  test('lineColor', () => {
    expect(
      render(<Divider lineColor="red" />).container.firstChild,
    ).toMatchSnapshot();
  });
  test('lineStyle', () => {
    expect(
      render(<Divider lineStyle="dashed" />).container.firstChild,
    ).toMatchSnapshot();
  });
  test('vertical', () => {
    expect(render(<Divider vertical />).container.firstChild).toMatchSnapshot();
  });
});
