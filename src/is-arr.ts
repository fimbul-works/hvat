/**
 * Check if a value is an array.
 *
 * @param {unknown} v - Value to check
 * @returns {boolean} `true` if the value is an array, `false` otherwise
 */
export const isArr = <T extends unknown[]>(v: unknown): v is T => Array.isArray(v);

export { isArr as isArray };
