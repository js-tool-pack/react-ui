import { ButtonContext, ButtonGroup, Button } from '..';
import { render } from '@testing-library/react';

describe('ButtonContext', () => {
  test('size', () => {
    // group 的 size 优先
    expect(
      render(
        <ButtonContext.Provider value={{ size: 'large' }}>
          <ButtonGroup size="small">
            <Button></Button>
            <Button></Button>
          </ButtonGroup>
        </ButtonContext.Provider>,
      ).container.firstChild,
    ).toMatchSnapshot();

    // 组件的 props 优先
    expect(
      render(
        <ButtonContext.Provider value={{ size: 'large' }}>
          <Button></Button>
          <Button size="small"></Button>
        </ButtonContext.Provider>,
      ).container.children,
    ).toMatchSnapshot();
  });
  test('other', () => {
    expect(
      render(
        <ButtonContext.Provider value={{ type: 'primary' }}>
          <Button></Button>
          <Button type="info"></Button>
        </ButtonContext.Provider>,
      ).container.children,
    ).toMatchSnapshot();
  });
});
