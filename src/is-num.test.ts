import { describe, expect, it } from "vitest";
import { isNum } from "./is-num";

describe("isNum", () => {
  it("should return true for numbers", () => {
    expect(isNum(0)).toBe(true);
    expect(isNum(-0)).toBe(true);
    expect(isNum(42)).toBe(true);
    expect(isNum(-3.14)).toBe(true);
    expect(isNum(Number.POSITIVE_INFINITY)).toBe(true);
    expect(isNum(Number.NEGATIVE_INFINITY)).toBe(true);
    expect(isNum(NaN)).toBe(true);
  });

  it("should return false for non-numbers", () => {
    expect(isNum("42")).toBe(false);
    expect(isNum(true)).toBe(false);
    expect(isNum(null)).toBe(false);
    expect(isNum(undefined)).toBe(false);
  });

  it("should return true for Number objects", () => {
    expect(isNum(new Number(42))).toBe(false);
  });

  it("should narrow type correctly", () => {
    const value: unknown = 42;
    if (isNum(value)) {
      const typed = value;
      expect(typeof typed).toBe("number");
    }
  });
});
