/**
 * Check if a value is a boolean.
 *
 * @param {unknown} v - Value to check
 * @returns {boolean} `true` if the value is a boolean, `false` otherwise
 */
export const isBool = (v: unknown): v is boolean => typeof v === "boolean";

export { isBool as isBoolean };
