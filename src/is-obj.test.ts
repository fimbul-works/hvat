import { describe, expect, it } from "vitest";
import { isObj } from "./is-obj";

describe("isObj", () => {
  it("should return true for plain objects", () => {
    expect(isObj({})).toBe(true);
    expect(isObj({ a: 1 })).toBe(true);
    expect(isObj(Object.create(null))).toBe(true);
  });

  it("should return false for arrays", () => {
    expect(isObj([])).toBe(false);
    expect(isObj([1, 2, 3])).toBe(false);
  });

  it("should return false for null", () => {
    expect(isObj(null)).toBe(false);
  });

  it("should return false for primitives", () => {
    expect(isObj(42)).toBe(false);
    expect(isObj("string")).toBe(false);
    expect(isObj(true)).toBe(false);
  });

  it("should return true for class instances", () => {
    class TestClass {
      a = 1;
    }
    expect(isObj(new TestClass())).toBe(true);
  });

  it("should narrow type correctly", () => {
    const value: unknown = { a: 1 };
    if (isObj(value)) {
      const typed = value;
      expect(typeof typed).toBe("object");
    }
  });
});
