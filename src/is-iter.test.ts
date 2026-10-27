import { describe, expect, it } from "vitest";
import { isIter, isIterable } from "./is-iter";

describe("isIter, isIterable", () => {
  it("should return true for arrays", () => {
    expect(isIter([])).toBe(true);
    expect(isIter([1, 2, 3])).toBe(true);
    expect(isIter(new Uint8Array())).toBe(true);
  });

  it("should return true for typed arrays", () => {
    expect(isIter(new Uint8Array())).toBe(true);
    expect(isIter(new Float32Array())).toBe(true);
    expect(isIter(new Float64Array())).toBe(true);
  });

  it("should return true for Map", () => {
    expect(isIter(new Map())).toBe(true);
  });

  it("should return true for Set", () => {
    expect(isIter(new Set())).toBe(true);
  });

  it("should return true for generator functions", () => {
    const gen = (function* () {
      yield 1;
      yield 2;
      yield 3;
    })();
    expect(isIter(gen)).toBe(true);
  });

  it("should return false for non-iterable", () => {
    expect(isIter({})).toBe(false);
    expect(isIter(null)).toBe(false);
    expect(isIter(undefined)).toBe(false);
  });

  it("should work with alias isIterable", () => {
    expect(isIter).toBe(isIterable);
  });
});
