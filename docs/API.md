# @fimbul-works/hvat

## Functions

### isArr()

```ts
function isArr<T>(v): v is T;
```

Check if a value is an array.

#### Type Parameters

| Type Parameter |
| ------ |
| <a id="type-parameter-t"></a> `T` *extends* `unknown`[] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `unknown` | Value to check |

#### Returns

`v is T`

`true` if the value is an array, `false` otherwise

***

### isBool()

```ts
function isBool(v): v is boolean;
```

Check if a value is a boolean.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `unknown` | Value to check |

#### Returns

`v is boolean`

`true` if the value is a boolean, `false` otherwise

***

### isClass()

```ts
function isClass<T>(v, type): v is InstanceType<T>;
```

Check if a value is an instance of a class.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t-1"></a> `T` *extends* new (...`args`) => `any` |  |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `unknown` | Value to check |
| `type` | `T` | Class to check against |

#### Returns

`v is InstanceType<T>`

`true` if the value is an instance of a class, `false` otherwise

***

### isFn()

```ts
function isFn<T>(v): v is T;
```

Check if a value is a function.

#### Type Parameters

| Type Parameter |
| ------ |
| <a id="type-parameter-t-2"></a> `T` *extends* (...`args`) => `any` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `unknown` | Value to check |

#### Returns

`v is T`

`true` if the value is a function, `false` otherwise

***

### isNull()

```ts
function isNull(v): v is null;
```

Check if a value is `null`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `unknown` | Value to check |

#### Returns

`v is null`

`true` if the value is `null`, `false` otherwise

***

### isNullish()

```ts
function isNullish(v): v is null | undefined;
```

Check if a value is empty (`null`, or `undefined`).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `unknown` | Value to check |

#### Returns

v is null \| undefined

`true` if the value is empty, `false` otherwise

***

### isNum()

```ts
function isNum(v): v is number;
```

Check if a value is a number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `unknown` | Value to check |

#### Returns

`v is number`

`true` if the value is a number, `false` otherwise

***

### isObj()

```ts
function isObj<T>(v): v is T;
```

Check if a value is an object.

#### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| <a id="type-parameter-t-3"></a> `T` *extends* `object` | Type of the object |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `unknown` | Value to check |

#### Returns

`v is T`

`true` if the value is an object, `false` otherwise

***

### isStr()

```ts
function isStr<T>(v): v is T;
```

Check if a value is a string.

#### Type Parameters

| Type Parameter |
| ------ |
| <a id="type-parameter-t-4"></a> `T` *extends* `string` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `unknown` | Value to check |

#### Returns

`v is T`

`true` if the value is a string, `false` otherwise

***

### isUndef()

```ts
function isUndef(v): v is undefined;
```

Check if a value is `undefined`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `any` | Value to check |

#### Returns

`v is undefined`

`true` if the value is `undefined`, `false` otherwise

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
