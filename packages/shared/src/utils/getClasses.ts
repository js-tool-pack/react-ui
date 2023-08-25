import { getComponentClass } from './getComponentClass';

export function getClasses<
  const C extends readonly string[],
  const S extends readonly string[],
>(
  name: string,
  children: C,
  state: S,
): Readonly<{
  root: string;
  __: Record<C[number], string>;
  '--': Record<S[number], string>;
}> {
  const root = getComponentClass(name);
  return {
    root,
    __: handleClasses(root, '__', children),
    '--': handleClasses(root, '--', state),
  };
}

function handleClasses(
  root: string,
  divider: '__' | '--',
  list: readonly string[],
): Record<string, string> {
  return list.reduce(
    (result, status) => {
      result[status] = `${root}${divider}${status}`;
      return result;
    },
    {} as Record<string, string>,
  );
}
