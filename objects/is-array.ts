const isArray = <T = any>(val: unknown): val is Array<T> =>
  Array.isArray(val) || val instanceof Set || val instanceof WeakSet;

export default isArray;