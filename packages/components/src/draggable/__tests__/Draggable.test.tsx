import { render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';
import { useState } from 'react';
import { Draggable } from '..';

describe('Draggable', () => {
  testAttrs(Draggable);
  test('base', () => {
    const App = () => {
      const [state, setState] = useState<{ name: string; id: number }[]>([
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
      ]);
      return (
        <Draggable onChange={setState} list={state}>
          {state.map((item, index) => (
            <div className="draggable-item" key={item.id}>
              <span>{index + 1}.</span> <span>{item.name}</span>{' '}
              <span>{item.id}</span>
            </div>
          ))}
        </Draggable>
      );
    };
    const r = render(<App />);
    expect(r.container.firstChild).toMatchSnapshot();
  });
});
