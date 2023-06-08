import { useCallback, useState } from 'react';

export function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  // 未使用useCallback会导致，子组件一直更新；
  // 但如果子组件依赖的其他数据而导致组件更新的话，该更新还是会更新
  // const toggle = () => {
  //   setValue((v) => !v);
  // };

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle];
}
