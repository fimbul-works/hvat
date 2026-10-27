/**
 * Check if a value is a primitive type number.
 *
 * @template T Type of number.
 * @param v - Value to check.
 * @returns `true` if the value is a number, `false` otherwise.
 */
export const isNum = <T extends number>(v: any): v is T => typeof v === "number";

export { isNum as isNumber };
