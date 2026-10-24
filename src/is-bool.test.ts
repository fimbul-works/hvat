import { describe, expect, it } from "vitest";
import { isBool } from "./is-bool";

describe("isBool", () => {
  it("should return true for boolean primitives", () => {
    expect(isBool(true)).toBe(true);
    expect(isBool(false)).toBe(true);
  });

  it("should return false for non-booleans", () => {
    expect(isBool(1)).toBe(false);
    expect(isBool("true")).toBe(false);
    expect(isBool(null)).toBe(false);
    expect(isBool(undefined)).toBe(false);
  });

  it("should return false for Boolean objects", () => {
    expect(isBool(new Boolean(true))).toBe(false); // eslint-disable-line no-new-wrappers
  });

  it("should narrow type correctly", () => {
    const value: unknown = true;
    if (isBool(value)) {
      const typed = value;
      expect(typeof typed).toBe("boolean");
    }
  });
});
