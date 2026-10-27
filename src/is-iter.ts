import { isFn } from "./is-fn";
import { isNullish } from "./is-nullish";

/**
 * Check if a value is iterable.
 *
 * @template T Type of iterable.
 * @param v - Value to check.
 * @returns `true` if the value is iterable, `false` otherwise.
 */
export const isIter = <T extends Iterable<T>>(v: any): v is T => !isNullish(v) && isFn(v[Symbol.iterator]);

export { isIter as isIterable };
