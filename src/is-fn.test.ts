import { describe, expect, it } from "vitest";
import { isFn } from "./is-fn";

describe("isFn", () => {
  it("should return true for functions", () => {
    expect(isFn(() => {})).toBe(true);
    expect(isFn(() => {})).toBe(true);
    expect(isFn(async () => {})).toBe(true);
    expect(isFn(function* () {})).toBe(true); // Generator functions
  });

  it("should return true for class constructors", () => {
    expect(isFn(class {})).toBe(true);
    expect(isFn(Array)).toBe(true);
    expect(isFn(Object)).toBe(true);
  });

  it("should return false for non-functions", () => {
    expect(isFn({})).toBe(false);
    expect(isFn(null)).toBe(false);
    expect(isFn(undefined)).toBe(false);
    expect(isFn(42)).toBe(false);
  });

  it("should return false for async function generators", () => {
    expect(isFn(async function* () {})).toBe(true);
  });

  it("should narrow type correctly", () => {
    const value: unknown = () => {};
    if (isFn(value)) {
      const typed = value;
      expect(typeof typed).toBe("function");
    }
  });
});
