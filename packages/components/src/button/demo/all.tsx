/**
 * title: 全览
 * description: 全览演示。
 */

import { Layout as OriginLayout, Button } from '@tool-pack/react-ui';
import React, { useCallback, useReducer } from 'react';

const App: React.FC = () => {
  const [times, _addTimes] = useReducer((s) => s + 1, 0);
  const addTimes = useCallback(() => _addTimes(), []);
  const types = [
    'default',
    'primary',
    'success',
    'info',
    'danger',
    'warning',
  ] as const;
  const sizes = ['small', 'medium', 'large'] as const;
  const shapes = ['none', 'default', 'round', 'circle'] as const;
  const plains = [false, true, 'dashed', 'text'] as const;
  return (
    <Layout vertical>
      click times: {times}
      <Layout>
        size:
        {sizes.map((size) => (
          <Button onClick={addTimes} className="test" size={size} key={size}>
            {size}
          </Button>
        ))}
      </Layout>
      <Layout>
        type:
        {types.map((type) => (
          <Button onClick={addTimes} type={type} key={type}>
            {type}
          </Button>
        ))}
      </Layout>
      <Layout>
        plain:
        {plains.map((plain) => (
          <Layout
            style={{ marginBottom: '5px', textAlign: 'center' }}
            key={String(plain)}
            vertical
          >
            ({String(plain)}):
            {types.map((type) => (
              <Button
                key={type + '_' + plain}
                onClick={addTimes}
                plain={plain}
                type={type}
              >
                {type}
              </Button>
            ))}
          </Layout>
        ))}
      </Layout>
      <Layout>
        disabled:
        {plains.map((plain) => (
          <Layout style={{ marginBottom: '5px' }} key={String(plain)} vertical>
            {types.map((type) => (
              <Button
                key={String(plain) + '_' + type}
                onClick={addTimes}
                plain={plain}
                type={type}
                disabled
              >
                {type}
              </Button>
            ))}
          </Layout>
        ))}
      </Layout>
      <Layout>
        shape:
        {sizes.map((size) =>
          shapes.map((shape) => (
            <Button
              key={size + '_' + shape}
              onClick={addTimes}
              type="primary"
              shape={shape}
              size={size}
            >
              {shape}
            </Button>
          )),
        )}
      </Layout>
    </Layout>
  );
};

const Layout: React.FC<Parameters<typeof OriginLayout>[0]> = React.memo(
  (props) => (
    <OriginLayout
      {...props}
      style={{
        overflow: 'visible',
        flexWrap: 'wrap',
        gap: '8px',
        ...props.style,
      }}
    >
      {props.children}
    </OriginLayout>
  ),
);

export default App;
