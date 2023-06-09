export function nextTick(): Promise<void>;
export function nextTick(then: () => unknown): void;
export function nextTick(then?: () => unknown): void | Promise<void> {
  const p = Promise.resolve();
  if (then) p.then(then);
  else return p;
}
