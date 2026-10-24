/**
 * Check if a value is `null`
 *
 * @param {unknown} v - Value to check
 * @returns {boolean} `true` if the value is `null`, `false` otherwise
 */
export const isNull = (v: unknown): v is null => v === null;
