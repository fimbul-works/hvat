import { describe, expect, it } from "vitest";
import { isTruthy } from "./is-truthy";

describe("isTruthy", () => {
  it("should return true for truthy values", () => {
    expect(isTruthy(true)).toBe(true);
    expect(isTruthy("hi")).toBe(true);
    expect(isTruthy(Date)).toBe(true);
    expect(isTruthy([])).toBe(true);
  });

  it("should return false for non-empty values", () => {
    expect(isTruthy(false)).toBe(false);
    expect(isTruthy(null)).toBe(false);
    expect(isTruthy(undefined)).toBe(false);
    expect(isTruthy("")).toBe(false);
    expect(isTruthy(0)).toBe(false);
  });
});
