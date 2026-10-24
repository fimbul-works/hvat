import { describe, expect, it } from "vitest";
import { isNull } from "./is-null";

describe("isNull", () => {
  it("should return true for null", () => {
    expect(isNull(null)).toBe(true);
  });

  it("should return false for undefined", () => {
    expect(isNull(undefined)).toBe(false);
  });

  it("should return false for non-empty values", () => {
    expect(isNull(0)).toBe(false);
    expect(isNull("")).toBe(false);
  });
});
