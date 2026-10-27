/**
 * Check if a value is truthy.
 * @param v - Value to check.
 * @returns `true` if value is truthy, `false` otherwise.
 */
export const isTruthy = (v: any): v is true => !!v;
