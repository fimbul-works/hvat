/**
 * Check if a value is a primitive type string.
 *
 * @template T Type of string.
 * @param v - Value to check.
 * @returns `true` if the value is a string, `false` otherwise.
 */
export const isStr = <T extends string>(v: any): v is T => typeof v === "string";

export { isStr as isString };
