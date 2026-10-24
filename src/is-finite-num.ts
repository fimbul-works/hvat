/**
 * Check if a value is a finite number.
 *
 * @param {unknown} v - Value to check
 * @returns {boolean} `true` if the value is a finite number, `false` otherwise
 */
export const isFiniteNum = (v: unknown): v is number => Number.isFinite(v);

export { isFiniteNum as isFiniteNumber };
