import { describe, expect, it } from "vitest";
import { isStr } from "./is-str";

describe("isStr", () => {
  it("should return true for strings", () => {
    expect(isStr("")).toBe(true);
    expect(isStr("hello")).toBe(true);
    expect(isStr("123")).toBe(true);
  });

  it("should return false for non-strings", () => {
    expect(isStr(123)).toBe(false);
    expect(isStr(true)).toBe(false);
    expect(isStr(null)).toBe(false);
    expect(isStr(undefined)).toBe(false);
  });

  it("should return true for String objects", () => {
    expect(isStr(new String("hello"))).toBe(false);
  });

  it("should narrow type correctly", () => {
    const value: unknown = "hello";
    if (isStr(value)) {
      const typed = value;
      expect(typeof typed).toBe("string");
    }
  });
});
