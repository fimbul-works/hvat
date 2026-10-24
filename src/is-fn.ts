/**
 * Check if a value is a function.
 *
 * @param {unknown} v - Value to check
 * @returns {boolean} `true` if the value is a function, `false` otherwise
 */
export const isFn = <T extends (...args: any[]) => any>(v: unknown): v is T => typeof v === "function";

export { isFn as isFunction };
