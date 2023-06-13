import { Button as BTN } from '@pkg/components';
import styles from './index.module.scss';
import { memo, useCallback, useReducer } from 'react';

const Button = memo(BTN);

export function ButtonPage() {
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
  const plains = [false, true, 'dashed', 'text'] as const;
  return (
    <div className={styles['root']}>
      click times: {times}
      <section>
        size:
        {sizes.map((size) => (
          <Button className="test" onClick={addTimes} size={size} key={size}>
            {size}
          </Button>
        ))}
      </section>
      <section>
        type:
        {types.map((type) => (
          <Button onClick={addTimes} type={type} key={type}>
            {type}
          </Button>
        ))}
      </section>
      <section>
        plain:
        {plains.map((plain) => (
          <div style={{ marginBottom: '5px' }} key={String(plain)}>
            ({String(plain)}):
            {types.map((type) => (
              <Button
                onClick={addTimes}
                type={type}
                key={type + '_' + plain}
                plain={plain}>
                {type}
              </Button>
            ))}
          </div>
        ))}
      </section>
      <section>
        disabled:
        {plains.map((plain) => (
          <div style={{ marginBottom: '5px' }} key={String(plain)}>
            {types.map((type) => (
              <Button
                onClick={addTimes}
                type={type}
                key={String(plain) + '_' + type}
                plain={plain}
                disabled>
                {type}
              </Button>
            ))}
          </div>
        ))}
      </section>
      <section>
        shape:
        <Button onClick={addTimes} type="primary" size="large">
          default
        </Button>
        <Button onClick={addTimes} type="danger" size="large" shape="round">
          primary round
        </Button>
        <Button onClick={addTimes} type="warning" size="large" shape="circle">
          circle
        </Button>
      </section>
    </div>
  );
}
