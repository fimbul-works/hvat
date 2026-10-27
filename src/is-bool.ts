/**
 * Check if a value is a primitive type boolean.
 *
 * @template T Type of boolean.
 * @param v - Value to check.
 * @returns `true` if the value is a boolean, `false` otherwise.
 */
export const isBool = <T extends boolean>(v: any): v is T => typeof v === "boolean";

export { isBool as isBoolean };
