import React, { useEffect, useState } from 'react';

/**
 * 带后续清理的状态
 *
 * 每当设置一个值，下一次 Effect 就会把它重置为 undefined，
 * 也就是说会触发 3 次 effect：
 * 1. 外部依赖状态更新
 * 2. 依据外部状态更新内部状态
 * 3. 内部状态恢复为 undefined
 *
 * 类似电子打火机的点火装置，点着了气体之后接下来就与点火器无关且可以关掉了。
 */
export function useStateWithTrailClear<T>(
  value: undefined | T,
): ReturnType<typeof React.useState<T>> {
  const [state, setState] = useState<typeof value>();

  useEffect(() => {
    state !== undefined && setState(undefined);
  }, [state]);
  useEffect(() => setState(value), [value]);

  return [state, setState];
}
