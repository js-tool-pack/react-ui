import { fireEvent, render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import * as Icons from '@pkg/icons';
import { Button } from '..';

describe('Button', () => {
  testAttrs(Button);

  test('base', () => {
    const onClick = jest.fn();
    const { container } = render(<Button onClick={onClick}>foo bar</Button>);

    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(container.firstChild!);
    fireEvent.click(container.firstChild!);
    fireEvent.click(container.firstChild!);
    expect(onClick.mock.calls.length).toBe(3);
  });
  test('disabled', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Button onClick={onClick} disabled>
        foo bar
      </Button>,
    );

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toBeDisabled();

    fireEvent.click(container.firstChild!);
    fireEvent.click(container.firstChild!);
    expect(onClick.mock.calls.length).toBe(0);
  });
  test('size', () => {
    expect(
      render(<Button size="small">foo bar</Button>).container.firstChild,
    ).toHaveClass('t-button t-button--type-default t--size-sm');
    expect(
      render(<Button size="medium">foo bar</Button>).container.firstChild,
    ).toHaveClass('t-button t-button--type-default t--size-m');
    expect(render(<Button>foo bar</Button>).container.firstChild).toHaveClass(
      't-button t-button--type-default t--size-m',
    );
    expect(
      render(<Button size="large">foo bar</Button>).container.firstChild,
    ).toHaveClass('t-button t-button--type-default t--size-lg');
  });
  test('plain', () => {
    expect(
      render(<Button plain>foo bar</Button>).container.firstChild,
    ).toHaveClass('t-button t-button--type-default t--size-m t-button--plain');
    expect(
      render(<Button plain="dashed">foo bar</Button>).container.firstChild,
    ).toHaveClass(
      't-button t-button--type-default t--size-m t-button--plain-dashed',
    );
    expect(
      render(<Button plain="text">foo bar</Button>).container.firstChild,
    ).toHaveClass(
      't-button t-button--type-default t--size-m t-button--plain-text',
    );
  });
  test('icon', () => {
    const { container: bool } = render(
      <Button icon={<Icons.Left />}>foo bar</Button>,
    );
    expect(bool.firstChild).toMatchSnapshot();
  });
  test('right-icon', () => {
    const { container: bool } = render(
      <Button icon={<Icons.Left />} rightIcon>
        foo bar
      </Button>,
    );
    expect(bool.firstChild).toMatchSnapshot();
  });
  test('type', () => {
    expect(render(<Button></Button>).container.firstChild).toHaveClass(
      't-button--type-default',
    );
    expect(
      render(<Button type="primary"></Button>).container.firstChild,
    ).toHaveClass('t-button--type-primary');
    expect(
      render(<Button type="success"></Button>).container.firstChild,
    ).toHaveClass('t-button--type-success');
    expect(
      render(<Button type="danger"></Button>).container.firstChild,
    ).toHaveClass('t-button--type-danger');
    expect(
      render(<Button type="info"></Button>).container.firstChild,
    ).toHaveClass('t-button--type-info');
    expect(
      render(<Button type="warning"></Button>).container.firstChild,
    ).toHaveClass('t-button--type-warning');
  });
  test('shape', () => {
    expect(render(<Button></Button>).container.firstChild).not.toHaveClass(
      't-button--shape-default',
    );
    expect(
      render(<Button shape="default"></Button>).container.firstChild,
    ).not.toHaveClass('t-button--shape-default');

    expect(
      render(<Button shape="none"></Button>).container.firstChild,
    ).toHaveClass('t-button--shape-none');
    expect(
      render(<Button shape="circle"></Button>).container.firstChild,
    ).toHaveClass('t-button--shape-circle');
    expect(
      render(<Button shape="round"></Button>).container.firstChild,
    ).toHaveClass('t-button--shape-round');
  });
  test('loading', () => {
    expect(
      render(<Button loading>foo bar</Button>).container.firstChild,
    ).toMatchSnapshot();
  });
  test('loading right-icon', () => {
    expect(
      render(
        <Button rightIcon loading>
          foo bar
        </Button>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });
  test('loading icon', () => {
    expect(
      render(
        <Button icon={<Icons.Left />} loading>
          foo bar
        </Button>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });
});
