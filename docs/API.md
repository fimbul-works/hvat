# @fimbul-works/hvat

## Functions

### isArr()

```ts
function isArr<T>(v): v is T[];
```

Check if a value is an array.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t"></a> `T` | Type of array item. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is T[]`

`true` if the value is an array, `false` otherwise.

***

### isBool()

```ts
function isBool<T>(v): v is T;
```

Check if a value is a primitive type boolean.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t-1"></a> `T` *extends* `boolean` | Type of boolean. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is T`

`true` if the value is a boolean, `false` otherwise.

***

### isClass()

```ts
function isClass<T>(v, type): v is InstanceType<T>;
```

Check if a value is an instance of a class.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t-2"></a> `T` *extends* new (...`args`) => `any` | Type of constructor. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |
| `type` | `T` | Constructor to check against. |

#### Returns

`v is InstanceType<T>`

`true` if the value is an instance of type, `false` otherwise.

***

### isConstructor()

```ts
function isConstructor<T>(v): v is T;
```

Check if a value is a class constructor.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t-3"></a> `T` *extends* new (...`args`) => `any` | Type of constructor. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is T`

`true` if the value is a class construcor, `false` otherwise.

***

### isFalsy()

```ts
function isFalsy(v): v is false;
```

Check if a value is falsy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is false`

`true` if value is truthy, `false` otherwise.

***

### isFn()

```ts
function isFn<T>(v): v is T;
```

Check if a value is a function.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t-4"></a> `T` *extends* (...`args`) => `any` | Type of function. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is T`

`true` if the value is a function, `false` otherwise.

***

### isIter()

```ts
function isIter<T>(v): v is T;
```

Check if a value is iterable.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t-5"></a> `T` *extends* `Iterable`\<`T`, `any`, `any`\> | Type of iterable. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is T`

`true` if the value is iterable, `false` otherwise.

***

### isNull()

```ts
function isNull(v): v is null;
```

Check if a value is `null`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is null`

`true` if the value is `null`, `false` otherwise.

***

### isNullish()

```ts
function isNullish<T>(v): v is T;
```

Check if a value is nullish (`null` or `undefined`).

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t-6"></a> `T` *extends* `null` \| `undefined` | Type of nullish value. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is T`

`true` if the value is nullish, `false` otherwise.

***

### isNum()

```ts
function isNum<T>(v): v is T;
```

Check if a value is a primitive type number.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t-7"></a> `T` *extends* `number` | Type of number. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is T`

`true` if the value is a number, `false` otherwise.

***

### isObj()

```ts
function isObj<T>(v): v is T;
```

Check if a value is an object.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t-8"></a> `T` *extends* `object` | Type of object. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is T`

`true` if the value is an object, `false` otherwise.

***

### isStr()

```ts
function isStr<T>(v): v is T;
```

Check if a value is a primitive type string.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t-9"></a> `T` *extends* `string` | Type of string. |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is T`

`true` if the value is a string, `false` otherwise.

***

### isTruthy()

```ts
function isTruthy(v): v is true;
```

Check if a value is truthy.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is true`

`true` if value is truthy, `false` otherwise.

***

### isUndef()

```ts
function isUndef(v): v is undefined;
```

Check if a value is `undefined`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check. |

#### Returns

`v is undefined`

`true` if the value is `undefined`, `false` otherwise.

## References

### isArray

Renames and re-exports [isArr](#isarr)

***

### isBoolean

Renames and re-exports [isBool](#isbool)

***

### isFunction

Renames and re-exports [isFn](#isfn)

***

### isInstanceOf

Renames and re-exports [isClass](#isclass)

***

### isIterable

Renames and re-exports [isIter](#isiter)

***

### isNumber

Renames and re-exports [isNum](#isnum)

***

### isObject

Renames and re-exports [isObj](#isobj)

***

### isString

Renames and re-exports [isStr](#isstr)

***

### isUndefined

Renames and re-exports [isUndef](#isundef)
