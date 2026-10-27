/**
 * Check if a value is `undefined`.
 *
 * @param v - Value to check.
 * @returns `true` if the value is `undefined`, `false` otherwise.
 */
export const isUndef = (v: any): v is undefined => v === undefined;

export { isUndef as isUndefined };
