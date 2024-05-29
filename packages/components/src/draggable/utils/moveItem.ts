/**
 * 移动数组的 item，修改源数组
 *
 * 例如把第一个移动到最后一个，除第一个 item 外全部往前移动一位，然后把原来的第一个 item 移动到最后
 */
export function moveItem<T>(list: T[], from: number, to: number): T[] {
  // 使用 splice 插入index为负数的话会插到前面去，转为正数插入
  if (to < 0) to += list.length;
  const splice = list.splice(from, 1);
  if (splice.length === 0) return list;
  list.splice(to, 0, splice[0] as T);
  return list;
}
