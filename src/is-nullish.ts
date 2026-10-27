/**
 * Check if a value is nullish (`null` or `undefined`).
 *
 * @template T Type of nullish value.
 * @param v - Value to check.
 * @returns `true` if the value is nullish, `false` otherwise.
 */
export const isNullish = <T extends null | undefined>(v: any): v is T => v === null || v === undefined;
