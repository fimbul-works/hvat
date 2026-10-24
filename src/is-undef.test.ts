import { describe, expect, it } from "vitest";
import { isUndef } from "./is-undef";

describe("isUndef", () => {
  it("should return true for undefined", () => {
    expect(isUndef(undefined)).toBe(true);
  });

  it("should return false for null", () => {
    expect(isUndef(null)).toBe(false);
  });

  it("should return false for non-empty values", () => {
    expect(isUndef(0)).toBe(false);
    expect(isUndef("")).toBe(false);
  });
});
