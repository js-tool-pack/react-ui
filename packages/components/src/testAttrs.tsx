import React from 'react';
import type { PropsBase } from '@pkg/shared';
import { render, fireEvent } from '@testing-library/react';

export function testAttrs(FC: React.FC<PropsBase>) {
  test('attrs', () => {
    const onClick = jest.fn();
    const { container } = render(
      <FC
        attrs={{
          className: 'foo',
          onClick,
          role: 'note',
          style: { width: '20px' },
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
