/* eslint-disable @typescript-eslint/no-unused-expressions */

export const eventManager = {
  list: new Map(),
  emitQueue: new Map(),

  on(event: any, callback: any) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },

  off(event: any, callback?: any) {
    if (callback) {
      const cb = this.list.get(event).filter((cb: any) => cb !== callback);
      this.list.set(event, cb);
      return this;
    }
    this.list.delete(event);
    return this;
  },

  cancelEmit(event: any) {
    const timers = this.emitQueue.get(event);
    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue.delete(event);
    }

    return this;
  },
  emit(event: any, ...args: any) {
    this.list.has(event) &&
      this.list.get(event).forEach((callback: any) => {
        const timer = setTimeout(() => {
          callback(...args);
        }, 0);

        this.emitQueue.has(event) || this.emitQueue.set(event, []);
        this.emitQueue.get(event).push(timer);
      });
  },
};
