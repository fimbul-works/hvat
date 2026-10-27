/**
 * Check if a value is `null`.
 *
 * @param v - Value to check.
 * @returns `true` if the value is `null`, `false` otherwise.
 */
export const isNull = (v: any): v is null => v === null;
