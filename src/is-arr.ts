/**
 * Check if a value is an array.
 *
 * @template T Type of array item.
 * @param v - Value to check.
 * @returns `true` if the value is an array, `false` otherwise.
 */
export const isArr = <T>(v: any): v is T[] => Array.isArray(v);

export { isArr as isArray };
