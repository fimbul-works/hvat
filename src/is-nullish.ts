/**
 * Check if a value is empty (`null`, or `undefined`).
 *
 * @param {unknown} v - Value to check
 * @returns {boolean} `true` if the value is empty, `false` otherwise
 */
export const isNullish = (v: unknown): v is null | undefined => v === null || typeof v === "undefined";
