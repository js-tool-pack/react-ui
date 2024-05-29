import { cloneElement, ReactNode, useEffect, useState, Children } from 'react';
import { renderHook, render, act } from '@testing-library/react';
import { useChildrenWithRefs } from '@pkg/shared';

describe('useChildrenWithRefs', () => {
  test('base', () => {
    const hook = renderHook(() => {
      const [children, setChildren] = useState<ReactNode>();
      const hook = useChildrenWithRefs(children);
      return [hook, setChildren] as const;
    });

    expect(hook.result.current[0]).toEqual([undefined, []]);
  });
  test('react ref', () => {
    const ref = jest.fn();
    const App = () => {
      return Children.map(
        <div className="test" draggable={true} id="div">
          1
        </div>,
        (child) => cloneElement(child, { ref }),
      );
    };
    const { container } = render(<App />);
    expect(ref).toHaveBeenCalled();
    expect(container.firstChild).toHaveClass('test');
    expect(container.firstChild).toHaveAttribute('draggable');
    expect(ref.mock.calls[0][0]).toBe(container.firstChild);
  });
  test('app', () => {
    const _refs: HTMLElement[] = [];
    const App = () => {
      const [children, setChildren] = useState<ReactNode>(
        <div className="foo">foo</div>,
      );
      const [newChildren, refs] = useChildrenWithRefs(children);

      useEffect(() => {
        _refs.push(...refs);
      }, [refs]);

      return (
        <>
          {newChildren}
          <button onClick={() => setChildren(<div className="bar">bar</div>)}>
            切换 children
          </button>
        </>
      );
    };

    expect(_refs).toEqual([]);
    const {
      container: { firstChild },
    } = render(<App />);

    expect(firstChild).toHaveTextContent('foo');
    expect(firstChild).toHaveClass('foo');
    expect(_refs.length).toBe(1);
    expect(_refs[0]).toBe(firstChild);

    _refs.length = 0;
    act(() => document.querySelector('button')!.click());
    expect(firstChild).toHaveTextContent('bar');
    expect(firstChild).toHaveClass('bar');
    expect(_refs.length).toBe(1);
    expect(_refs[0]).toBe(firstChild);
  });
});
