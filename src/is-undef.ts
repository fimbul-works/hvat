/**
 * Check if a value is `undefined`.
 *
 * @param {any} v - Value to check
 * @returns {boolean} `true` if the value is `undefined`, `false` otherwise
 */
export const isUndef = (v: any): v is undefined => v === undefined;

export { isUndef as isUndefined };
