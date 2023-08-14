import { render } from '@testing-library/react';
import { Button, ButtonGroup } from '..';

describe('ButtonGroup', () => {
  test('size', () => {
    expect(
      render(
        <ButtonGroup size="small">
          <Button></Button>
          <Button></Button>
        </ButtonGroup>,
      ).container.firstChild,
    ).toMatchSnapshot();

    expect(
      render(
        <ButtonGroup size="large">
          <Button></Button>
          <Button></Button>
        </ButtonGroup>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });
});
