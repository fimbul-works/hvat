import { describe, expect, it } from "vitest";
import { isClass, isInstanceOf } from "./is-class";

describe("isClass", () => {
  class Person {
    constructor(public name: string) {}
  }

  class Employee extends Person {
    constructor(
      name: string,
      public role: string,
    ) {
      super(name);
    }
  }

  it("should return true for instances of the class", () => {
    expect(isClass(new Person("Alice"), Person)).toBe(true);
    expect(isClass(new Employee("Bob", "Dev"), Person)).toBe(true);
    expect(isClass(new Employee("Bob", "Dev"), Employee)).toBe(true);
  });

  it("should return true for built-in class instances", () => {
    expect(isClass(new Date(), Date)).toBe(true);
    expect(isClass(/abc/, RegExp)).toBe(true);
    expect(isClass(new Map(), Map)).toBe(true);
    expect(isClass(new Set(), Set)).toBe(true);
  });

  it("should return false for unrelated classes or non-instances", () => {
    expect(isClass(new Person("Alice"), Employee)).toBe(false);
    expect(isClass(new Date(), RegExp)).toBe(false);
  });

  it("should return false for primitives and plain objects", () => {
    expect(isClass("string", String)).toBe(false);
    expect(isClass(42, Number)).toBe(false);
    expect(isClass(true, Boolean)).toBe(false);
    expect(isClass({}, Person)).toBe(false);
    expect(isClass(null, Person)).toBe(false);
    expect(isClass(undefined, Person)).toBe(false);
  });

  it("should narrow type correctly to instance", () => {
    const val: unknown = new Person("Charlie");
    if (isClass(val, Person)) {
      expect(val.name).toBe("Charlie");
    }

    const d: unknown = new Date();
    if (isClass(d, Date)) {
      expect(d.getTime()).toBeTypeOf("number");
    }
  });

  it("should work with alias isInstanceOf", () => {
    expect(isClass).toBe(isInstanceOf);
  });
});
