import { isFn } from "./is-fn.js";

/**
 * Check if a value is a class constructor.
 *
 * @template T Type of constructor.
 * @param v - Value to check.
 * @returns `true` if the value is a class construcor, `false` otherwise.
 */
export const isConstructor = <T extends abstract new (...args: any[]) => any>(v: any): v is T =>
  isFn(v) && !!v.prototype;
