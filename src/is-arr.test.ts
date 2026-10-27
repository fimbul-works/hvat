import { describe, expect, it } from "vitest";
import { isArr, isArray } from "./is-arr";

describe("isArr", () => {
  it("should return true for arrays", () => {
    expect(isArr([])).toBe(true);
    expect(isArr([1, 2, 3])).toBe(true);
  });

  it("should return false for non-arrays", () => {
    expect(isArr({})).toBe(false);
    expect(isArr(null)).toBe(false);
    expect(isArr(undefined)).toBe(false);
  });

  it("should work with alias isArray", () => {
    expect(isArr).toBe(isArray);
  });
});
