import { fireEvent, render } from '@testing-library/react';
import type { PropsBase } from '@pkg/shared';
import React from 'react';

export function testAttrs<
  T extends { attrs?: Partial<React.HTMLAttributes<HTMLElement>> },
>(component: React.FC<T>, displayName?: string) {
  const name = displayName || component.displayName || component.name;
  test(name ? `${name} attrs` : `attrs`, () => {
    const onClick = jest.fn();

    const FC = component as React.FC<PropsBase>;
    const { container } = render(
      <FC
        attrs={{
          style: { width: '20px' },
          className: 'foo',
          role: 'note',
          onClick,
        }}
      />,
    );

    expect(container.firstChild).toHaveClass('foo');
    expect(container.firstChild).toHaveAttribute('role', 'note');
    expect(container.firstChild).toHaveStyle({ width: '20px' });

    expect(onClick).not.toBeCalled();
    fireEvent.click(container.firstChild!);
    expect(onClick).toBeCalled();
  });
}
