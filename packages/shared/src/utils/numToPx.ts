export function numToPx<T>(
  value: undefined | number | string,
  defValue: T,
): string | T {
  return value === undefined
    ? defValue
    : typeof value === 'number'
      ? `${value}px`
      : value;
}
