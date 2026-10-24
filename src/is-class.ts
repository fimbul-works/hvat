/**
 * Check if a value is an instance of a class.
 *
 * @template T
 * @param {unknown} v - Value to check
 * @param {T} type - Class to check against
 * @returns {boolean} `true` if the value is an instance of a class, `false` otherwise
 */
export const isClass = <T extends abstract new (...args: any[]) => any>(v: unknown, type: T): v is InstanceType<T> =>
  v instanceof type;

export { isClass as isInstanceOf };
