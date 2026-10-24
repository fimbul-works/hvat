# @fimbul-works/hvat

[![license](https://img.shields.io/npm/l/%40fimbul-works%2Fhvat?color=brightgreen&style=flat-square)](LICENSE)
[![npm version](https://img.shields.io/npm/v/%40fimbul-works%2Fhvat?color=blue&style=flat-square)](https://www.npmjs.com/package/@fimbul-works/hvat)
[![code style](https://img.shields.io/badge/code_style-biome-dfdbd6?style=flat-square)](https://biomejs.dev)
[![bundle size](https://img.shields.io/badge/bundle_size-ultra--light-blueviolet?style=flat-square)](#highlights)

An ultra-lightweight collection of ergonomic TypeScript type guards for runtime type narrowing and defensive validation.

> **Etymology:** An Old Norse interrogative pronoun, roughly corresponding to English _"what?"_ or _"which?"_.

---

## Highlights

- **Zero Dependencies & Ultra-Light**: The entire bundle is ~483 B minified (258 B gzipped, 232 B Brotli). Individual tree-shaken guards compile to between 40 B and 100 B minified.
- **Accurate Type Narrowing**: Leverages TypeScript type predicates to narrow types without manual casting.
- **Defensive Runtime Semantics**: `isObj` safely excludes `null` and arrays; `isFiniteNum` rejects `NaN` and `±Infinity`; `isClass` narrows to `InstanceType<T>`.
- **Short Names & Verbose Aliases**: Fast 3-to-5 letter shorthands (`isStr`, `isArr`, `isObj`, `isFn`, `isClass`) alongside full aliases (`isString`, `isArray`, `isObject`, `isFunction`, `isInstanceOf`).
- **Dual Export**: Dual ESM and CommonJS support with bundled `.d.ts` declaration files.

---

## Available Guards

| Guard              | Alias            | Type Predicate           | Matches                                                 | Rejects                                       |
| :----------------- | :--------------- | :----------------------- | :------------------------------------------------------ | :-------------------------------------------- |
| `isStr(v)`         | `isString`       | `v is string`            | String primitives                                       | Non-strings                                   |
| `isNum(v)`         | `isNumber`       | `v is number`            | Number primitives (including `NaN`, `±Infinity`)        | Non-numbers                                   |
| `isFiniteNum(v)`   | `isFiniteNumber` | `v is number`            | Finite numbers (e.g. `0`, `-3.14`, `42`)                | `NaN`, `±Infinity`, non-numbers               |
| `isBool(v)`        | `isBoolean`      | `v is boolean`           | Boolean primitives (`true`, `false`)                    | Non-booleans                                  |
| `isArr<T>(v)`      | `isArray`        | `v is T`                 | Array instances (`Array.isArray`)                       | Objects, iterables, primitives                |
| `isObj<T>(v)`      | `isObject`       | `v is T`                 | Non-null, non-array objects (including class instances) | `null`, arrays, primitives                    |
| `isClass(v, type)` | `isInstanceOf`   | `v is InstanceType<T>`   | Instances of the specified class constructor            | Non-instances, primitives                     |
| `isFn<T>(v)`       | `isFunction`     | `v is T`                 | Functions, arrow functions, constructors                | Non-functions                                 |
| `isNull(v)`        | —                | `v is null`              | Exactly `null`                                          | Everything else                               |
| `isUndef(v)`       | `isUndefined`    | `v is undefined`         | Exactly `undefined`                                     | Everything else                               |
| `isNullish(v)`     | —                | `v is null \| undefined` | `null` or `undefined`                                   | Falsy non-nullish values (`0`, `""`, `false`) |

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

### 2. Finite Numbers vs. NaN & Infinities

```typescript
import { isFiniteNum, isNum } from "@fimbul-works/hvat";

isNum(NaN); // true
isFiniteNum(NaN); // false

isNum(Infinity); // true
isFiniteNum(Infinity); // false

isFiniteNum(42); // true
isFiniteNum(-3.14); // true
```

### 3. Objects & Arrays

```typescript
import { isArr, isObj, isStr } from "@fimbul-works/hvat";

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

> **Note on Generics:** Type parameters like `isObj<T>`, `isArr<T>`, and `isFn<T>` provide compile-time narrowing over verified base structures (e.g. for branded types or known internal contracts). They perform shallow type guards, not deep runtime schema validation.
````

### 4. Class Instances

```typescript
import { isClass } from "@fimbul-works/hvat";

if (isClass(value, Date)) {
  console.log(value.toISOString()); // value is narrowed to Date
}
````

### 5. Nullish Checks & Filtering

```typescript
import { isNullish, isStr } from "@fimbul-works/hvat";

const items: (string | null | undefined)[] = ["a", null, "b", undefined];

// Narrow to string[]:
const strings: string[] = items.filter(isStr); // ["a", "b"]

// Filter nullish:
const present = items.filter((v): v is string => !isNullish(v));
```

### 6. Functions

```typescript
import { isFn } from "@fimbul-works/hvat";

if (isFn(callback)) {
  callback();
}
```

---

## Documentation

For full type signatures and module documentation, refer to the generated [API documentation](docs/API.md).

## License

MIT License - See [LICENSE](LICENSE) file for details.

---

Built with 🔍 by [FimbulWorks](https://github.com/fimbul-works)
