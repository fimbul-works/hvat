# @fimbul-works/hvat

[![license](https://img.shields.io/npm/l/%40fimbul-works%2Fhvat?color=brightgreen&style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/%40fimbul-works%2Fhvat?color=blue&style=flat-square)](https://www.npmjs.com/package/@fimbul-works/hvat)
[![code style](https://img.shields.io/badge/code_style-biome-dfdbd6?style=flat-square)](https://biomejs.dev)
[![bundle size](https://img.shields.io/badge/bundle_size-ultra--light-blueviolet?style=flat-square)](#highlights)

An ultra-lightweight collection of ergonomic TypeScript type guards for runtime type narrowing and defensive validation.

> **Etymology:** An Old Norse interrogative pronoun, roughly corresponding to English _"what?"_ or _"which?"_.

---

## Highlights

- **Zero Dependencies & Ultra-Light**: The entire bundle is <1KB minified, and individual tree-shaken guards compile to bytes.
- **Accurate Type Narrowing**: Leverages TypeScript type predicates to narrow types without manual casting; `isObj` safely excludes `null` and arrays; `isClass` narrows to `InstanceType<T>`.
- **Short Names & Verbose Aliases**: Fast letter shorthands (`isStr`, `isArr`, `isObj`, `isFn`, `isClass`, `isIter`) alongside full aliases (`isString`, `isArray`, `isObject`, `isFunction`, `isInstanceOf`, `isIterable`).

---

## Available Guards

| Guard                 | Alias          | Type Predicate                     | Matches                                                 |
| :-------------------- | :------------- | :--------------------------------- | :------------------------------------------------------ |
| `isArr<T>(v)`         | `isArray`      | `v is T[]`                         | Array instances (`Array.isArray`)                       |
| `isBool<T>(v)`        | `isBoolean`    | `v is boolean`                     | Boolean primitives (`true`, `false`)                    |
| `isClass<T>(v, type)` | `isInstanceOf` | `v is InstanceType<T>`             | Instances of the specified class constructor            |
| `isConstructor<T>(v)` | -              | `v is new (...args: any[]) => any` | Class constructors                                      |
| `isFn<T>(v)`          | `isFunction`   | `v is (...args: any[]) => any`     | Functions, arrow functions, constructors                |
| `isNum<T>(v)`         | `isNumber`     | `v is number`                      | Number primitives (including `NaN`, `±Infinity`)        |
| `isIter<T>(v)`        | `isIterable`   | `v is Iterable`                    | Iterators (containing `Symbol.iterator`)                |
| `isObj<T>(v)`         | `isObject`     | `v is object`                      | Non-null, non-array objects (including class instances) |
| `isStr<T>(v)`         | `isString`     | `v is string`                      | String primitives                                       |
| `isNullish<T>(v)`     | —              | `v is null \| undefined`           | `null` or `undefined`                                   |
| `isNull(v)`           | —              | `v is null`                        | Exactly `null`                                          |
| `isUndef(v)`          | `isUndefined`  | `v is undefined`                   | Exactly `undefined`                                     |
| `isTruthy(v)`         | —              | `v is true`                        | Truthy values (`!!v`)                                   |
| `isFalsy(v)`          | —              | `v is true`                        | Falsy values (`!v`)                                     |

> **Note on Generics:** Type parameters like `isObj<T>`, `isArr<T>`, and `isFn<T>` provide compile-time narrowing over verified base structures (e.g. for branded types or known internal contracts). They perform shallow type guards, not deep runtime schema validation.

---

## Installation

```bash
pnpm add @fimbul-works/hvat
# or
npm install @fimbul-works/hvat
# or
yarn add @fimbul-works/hvat
# or
bun add @fimbul-works/hvat
```

---

## Usage

### 1. Primitive Type Narrowing

```typescript
import { isBool, isNum, isStr } from "@fimbul-works/hvat";

function format(value: unknown) {
  if (isStr(value)) return value.trim();
  if (isNum(value)) return value.toFixed(2);
  if (isBool(value)) return value ? "Yes" : "No";
  return "Unsupported";
}
```

### 2. Numbers vs. NaN & Infinities

```typescript
import { isNum } from "@fimbul-works/hvat";

// JavaScript has a built-in isFinite function
isNum(NaN); // true
Number.isFinite(NaN); // false

isNum(Infinity); // true
Number.isFinite(Infinity); // false

isFinite(42); // true
Number.isFinite(-3.14); // true
```

### 3. Objects & Arrays

```typescript
import { isArr, isObj } from "@fimbul-works/hvat";

// In JS, typeof null === "object" and typeof [] === "object".
// isObj safely excludes both:
isObj({}); // true
isObj([1, 2, 3]); // false
isObj(null); // false

isArr([1, 2, 3]); // true
```

Guards can be combined to validate nested properties safely without assuming an unverified schema:

```typescript
// Safely verify the object container before accessing its properties:
if (isObj(data) && isStr(data.id)) {
  console.log(data.id); // Safely verified at runtime and narrowed to string
}
```

### 4. Class Instances & Constructors

```typescript
import { isClass, isConstructor } from "@fimbul-works/hvat";

if (isClass(value, Date)) {
  console.log(value.toISOString()); // value is narrowed to Date
}

isConstructor(Date); // true
isConstructor(() => {}); // false
```

### 5. Nullish Checks & Filtering

```typescript
import { isNullish, isStr, isTruthy } from "@fimbul-works/hvat";

const items: (string | null | undefined)[] = ["a", null, "b", undefined, "", 0];

// Narrow to string[]:
const strings: string[] = items.filter(isStr); // ["a", "b", ""]

// Filter nullish:
const present = items.filter((v): v is string => !isNullish(v));

// Filter falsy:
const truthy = items.filter(isTruthy); // ["a", "b"]
```

### 6. Functions

```typescript
import { isFn } from "@fimbul-works/hvat";

if (isFn(callback)) {
  callback();
}
```

### 7. Iterators & Iterable

```typescript
import { isIter } from "@fimbul-works/hvat";

if (isIter(value)) {
  for (const item of value) {
    console.log(item);
  }
}
```

---

## Documentation

For full type signatures and module documentation, refer to the generated [API documentation](docs/API.md).

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

Built with 🔍 by [FimbulWorks](https://github.com/fimbul-works)
