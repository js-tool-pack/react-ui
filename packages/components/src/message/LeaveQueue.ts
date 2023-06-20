export default class LeaveQueue<T> {
  private queue: T[] = [];
  private running = false;

  constructor(private readonly onRemove: (item: T) => void) {}

  private remove(item: T) {
    if (this.running) return;
    this.running = true;
    this.onRemove(item);
  }

  shift() {
    this.running = false;
    if (!this.queue.length) return;
    this.remove(this.queue.shift()!);
  }

  push(...items: T[]) {
    if (!items.length) return;
    if (!this.running) this.remove(items.shift()!);
    this.queue.push(...items);
  }
}
