import { describe, expect, it } from "vitest";
import { isFalsy } from "./is-falsy";

describe("isFalsy", () => {
  it("should return true for false", () => {
    expect(isFalsy(false)).toBe(true);
  });

  it("should return true for null", () => {
    expect(isFalsy(null)).toBe(true);
  });

  it("should return true for undefined", () => {
    expect(isFalsy(undefined)).toBe(true);
  });

  it("should return true for empty string", () => {
    expect(isFalsy("")).toBe(true);
  });

  it("should return true for zero", () => {
    expect(isFalsy(0)).toBe(true);
  });

  it("should return false for non-empty values", () => {
    expect(isFalsy(1)).toBe(false);
    expect(isFalsy("hi")).toBe(false);
    expect(isFalsy([])).toBe(false);
  });
});
