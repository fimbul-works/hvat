/**
 * Check if a value is a string.
 *
 * @param {unknown} v - Value to check
 * @returns {boolean} `true` if the value is a string, `false` otherwise
 */
export const isStr = <T extends string>(v: unknown): v is T => typeof v === "string";

export { isStr as isString };
