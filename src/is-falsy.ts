/**
 * Check if a value is falsy.
 * @param v - Value to check.
 * @returns `true` if value is truthy, `false` otherwise.
 */
export const isFalsy = (v: any): v is false => !v;
