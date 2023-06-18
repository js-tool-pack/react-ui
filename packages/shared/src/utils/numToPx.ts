export function numToPx<T>(
  value: number | string | undefined,
  defValue: T,
): string | T {
  return value === undefined
    ? defValue
    : typeof value === 'number'
    ? `${value}px`
    : value;
}
