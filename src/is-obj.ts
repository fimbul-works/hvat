/**
 * Check if a value is an object.
 *
 * @template T Type of object.
 * @param v - Value to check.
 * @returns `true` if the value is an object, `false` otherwise.
 */
export const isObj = <T extends object>(v: any): v is T => v !== null && typeof v === "object" && !Array.isArray(v);

export { isObj as isObject };
