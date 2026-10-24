/**
 * Check if a value is a number.
 *
 * @param {unknown} v - Value to check
 * @returns {boolean} `true` if the value is a number, `false` otherwise
 */
export const isNum = (v: unknown): v is number => typeof v === "number";

export { isNum as isNumber };
