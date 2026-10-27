import { describe, expect, it } from "vitest";
import { isConstructor } from "./is-constructor";

describe("isConstructor", () => {
  class TestClass {
    foo() {}
  }

  function TestFn() {}

  it("should return true for class constructors", () => {
    expect(isConstructor(Date)).toBe(true);
    expect(isConstructor(TestClass)).toBe(true);
    expect(isConstructor(TestFn)).toBe(true);
  });

  it("should return false for arrow functions", () => {
    expect(isConstructor(() => {})).toBe(false);
  });

  it("should return false for primitives", () => {
    expect(isConstructor("string")).toBe(false);
    expect(isConstructor(42)).toBe(false);
    expect(isConstructor(true)).toBe(false);
    expect(isConstructor({})).toBe(false);
    expect(isConstructor(null)).toBe(false);
    expect(isConstructor(undefined)).toBe(false);
  });

  it("should narrow type correctly to instance", () => {
    const val = new TestClass();

    if (isConstructor(TestClass)) {
      expect(val.foo).toBeTypeOf("function");
    }
  });

  it("should work with alias isContructor", () => {
    expect(isConstructor).toBe(isConstructor);
  });
});
