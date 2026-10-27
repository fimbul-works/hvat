/**
 * Check if a value is a function.
 *
 * @template T Type of function.
 * @param v - Value to check.
 * @returns `true` if the value is a function, `false` otherwise.
 */
export const isFn = <T extends (...args: any[]) => any>(v: any): v is T => typeof v === "function";

export { isFn as isFunction };
