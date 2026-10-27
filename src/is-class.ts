/**
 * Check if a value is an instance of a class.
 *
 * @template T Type of constructor.
 * @param v - Value to check.
 * @param type - Constructor to check against.
 * @returns `true` if the value is an instance of type, `false` otherwise.
 */
export const isClass = <T extends abstract new (...args: any[]) => any>(v: any, type: T): v is InstanceType<T> =>
  v instanceof type;

export { isClass as isInstanceOf };
