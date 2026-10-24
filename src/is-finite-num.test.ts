import { describe, expect, it } from "vitest";
import { isFiniteNum } from "./is-finite-num";

describe("isFiniteNum", () => {
  it("should return true for real numbers", () => {
    expect(isFiniteNum(0)).toBe(true);
    expect(isFiniteNum(-0)).toBe(true);
    expect(isFiniteNum(42)).toBe(true);
    expect(isFiniteNum(-3.14)).toBe(true);
  });

  it("should return false for non-real numbers (NaN, Infinity)", () => {
    expect(isFiniteNum(Number.POSITIVE_INFINITY)).toBe(false);
    expect(isFiniteNum(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(isFiniteNum(NaN)).toBe(false);
  });

  it("should return false for non-numbers", () => {
    expect(isFiniteNum("42")).toBe(false);
    expect(isFiniteNum(true)).toBe(false);
    expect(isFiniteNum(null)).toBe(false);
    expect(isFiniteNum(undefined)).toBe(false);
  });

  it("should return false for Number objects", () => {
    expect(isFiniteNum(new Number(42))).toBe(false);
  });

  it("should narrow type correctly", () => {
    const value: unknown = 42;
    if (isFiniteNum(value)) {
      const typed = value;
      expect(typeof typed).toBe("number");
    }
  });
});
