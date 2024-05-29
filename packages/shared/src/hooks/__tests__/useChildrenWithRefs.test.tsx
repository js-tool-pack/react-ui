import {
  cloneElement,
  ReactNode,
  useEffect,
  useState,
  Children,
  useRef,
} from 'react';
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
    const obj: { refs: (HTMLElement | undefined)[]; ref: HTMLElement | null } =
      {
        ref: null,
        refs: [],
      };
    const App = () => {
      const ref = useRef<HTMLDivElement>(null);
      const [children, setChildren] = useState<ReactNode>(
        <div className="foo" ref={ref}>
          foo
        </div>,
      );
      const [newChildren, refs] = useChildrenWithRefs(children);

      useEffect(() => {
        obj.refs = refs;
        obj.ref = ref.current;
      }, [refs]);

      return (
        <>
          {newChildren}
          <button
            onClick={() =>
              setChildren(
                <div className="bar" ref={ref}>
                  bar
                </div>,
              )
            }
          >
            切换 children
          </button>
        </>
      );
    };

    expect(obj.refs).toEqual([]);
    const {
      container: { firstChild },
    } = render(<App />);

    expect(firstChild).toHaveTextContent('foo');
    expect(firstChild).toHaveClass('foo');
    expect(obj.refs.length).toBe(1);
    expect(obj.refs[0]).toBe(firstChild);
    expect(obj.ref).toBe(firstChild);

    act(() => document.querySelector('button')!.click());
    expect(firstChild).toHaveTextContent('bar');
    expect(firstChild).toHaveClass('bar');
    expect(obj.refs.length).toBe(1);
    expect(obj.refs[0]).toBe(firstChild);
    expect(obj.ref).toBe(firstChild);
  });
  test('cloneEl', () => {
    const App = () => {
      const [children] = useChildrenWithRefs(<div>foo</div>, (element, props) =>
        cloneElement(element, { ...props, className: 'foo' }),
      );
      return children;
    };
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass('foo');
  });
});
