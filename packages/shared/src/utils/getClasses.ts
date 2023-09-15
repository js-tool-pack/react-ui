import { getComponentClass } from './getComponentClass';

export function getClasses<
  const C extends readonly string[],
  const S extends readonly string[],
>(
  name: string,
  children: C,
  state: S,
): Readonly<{
  '--': Record<S[number], string>;
  __: Record<C[number], string>;
  root: string;
}> {
  const root = getComponentClass(name);
  return {
    __: handleClasses(root, '__', children),
    '--': handleClasses(root, '--', state),
    root,
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
