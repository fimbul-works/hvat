import { isArr } from "./is-arr.js";

/**
 * Check if a value is an object.
 *
 * @template {object} T - Type of the object
 * @param {unknown} v - Value to check
 * @returns {boolean} `true` if the value is an object, `false` otherwise
 */
export const isObj = <T extends object>(v: unknown): v is T => v !== null && typeof v === "object" && !isArr(v);

export { isObj as isObject };
