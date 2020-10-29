> Globals

# @carv/is - v1.1.0

## Index

### Type aliases

* [Primitive](README.md#primitive)

### Functions

* [isArray](README.md#isarray)
* [isBigInt](README.md#isbigint)
* [isBoolean](README.md#isboolean)
* [isDate](README.md#isdate)
* [isDefined](README.md#isdefined)
* [isEmptyArray](README.md#isemptyarray)
* [isEmptyString](README.md#isemptystring)
* [isFinite](README.md#isfinite)
* [isFunction](README.md#isfunction)
* [isInfinite](README.md#isinfinite)
* [isInteger](README.md#isinteger)
* [isNaN](README.md#isnan)
* [isNativePromise](README.md#isnativepromise)
* [isNil](README.md#isnil)
* [isNonEmptyArray](README.md#isnonemptyarray)
* [isNonEmptyString](README.md#isnonemptystring)
* [isNull](README.md#isnull)
* [isNumber](README.md#isnumber)
* [isObject](README.md#isobject)
* [isPlainObject](README.md#isplainobject)
* [isPrimitive](README.md#isprimitive)
* [isPromise](README.md#ispromise)
* [isPromiseLike](README.md#ispromiselike)
* [isRegExp](README.md#isregexp)
* [isSafeInteger](README.md#issafeinteger)
* [isString](README.md#isstring)
* [isSymbol](README.md#issymbol)
* [isType](README.md#istype)
* [isUndefined](README.md#isundefined)
* [isValidDate](README.md#isvaliddate)

## Type aliases

### Primitive

Ƭ  **Primitive**: null \| undefined \| boolean \| number \| bigint \| string \| symbol

*Defined in [index.ts:175](https://github.com/carvjs/is/blob/main/src/index.ts#L175)*

Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

## Functions

### isArray

▸ **isArray**\<T>(`value`: unknown, `assertion?`: undefined \| (value: unknown) => value is T): value is T[]

*Defined in [index.ts:268](https://github.com/carvjs/is/blob/main/src/index.ts#L268)*

Returns `true` if `value` is an array and all of its items match the `assertion` (if provided).

**`alias`** is.array

#### Type parameters:

Name | Description |
------ | ------ |
`T` | item type |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |
`assertion?` | undefined \| (value: unknown) => value is T | to apply to every element |

**Returns:** value is T[]

___

### isBigInt

▸ **isBigInt**(`value`: unknown): value is bigint

*Defined in [index.ts:168](https://github.com/carvjs/is/blob/main/src/index.ts#L168)*

Returns `true` if passed `value` is a bigint.

**`alias`** is.bigint

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is bigint

___

### isBoolean

▸ **isBoolean**(`value`: unknown): value is boolean

*Defined in [index.ts:141](https://github.com/carvjs/is/blob/main/src/index.ts#L141)*

Returns `true` if passed `value` is a boolean.

**`alias`** is.boolean

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is boolean

___

### isDate

▸ **isDate**(`value`: unknown): value is Date

*Defined in [index.ts:314](https://github.com/carvjs/is/blob/main/src/index.ts#L314)*

Returns `true` if `value` is a Date.

**`alias`** is.date

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is Date

___

### isDefined

▸ **isDefined**\<T>(`value`: T): value is Exclude\<T, undefined>

*Defined in [index.ts:198](https://github.com/carvjs/is/blob/main/src/index.ts#L198)*

Returns `true` if passed `value` is not `undefined`.

**`alias`** is.defined

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | T | to check |

**Returns:** value is Exclude\<T, undefined>

___

### isEmptyArray

▸ **isEmptyArray**(`value`: unknown): value is never[]

*Defined in [index.ts:289](https://github.com/carvjs/is/blob/main/src/index.ts#L289)*

Returns `true` if `value` is an array with a length of zero.

**`alias`** is.emptyArray

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is never[]

___

### isEmptyString

▸ **isEmptyString**(`value`: unknown): value is ""

*Defined in [index.ts:63](https://github.com/carvjs/is/blob/main/src/index.ts#L63)*

Returns `true` if passed `value` is a string with a length of zero.

**`alias`** is.emptyString

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is ""

___

### isFinite

▸ **isFinite**(`value`: unknown): value is number

*Defined in [index.ts:94](https://github.com/carvjs/is/blob/main/src/index.ts#L94)*

Returns `true` if passed `value` is finite.

**`alias`** is.finite

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is number

___

### isFunction

▸ **isFunction**(`value`: unknown): value is Function

*Defined in [index.ts:150](https://github.com/carvjs/is/blob/main/src/index.ts#L150)*

Returns `true` if passed `value` is a function.

**`alias`** is.function

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is Function

___

### isInfinite

▸ **isInfinite**(`value`: unknown): value is number

*Defined in [index.ts:104](https://github.com/carvjs/is/blob/main/src/index.ts#L104)*

Returns `true` if passed `value` is infinite (`Infinite` or `+Infinite`).

**`alias`** is.infinite

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is number

___

### isInteger

▸ **isInteger**(`value`: unknown): value is number

*Defined in [index.ts:113](https://github.com/carvjs/is/blob/main/src/index.ts#L113)*

Returns `true` if the `value` passed is an integer, `false` otherwise.

**`alias`** is.integer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is number

___

### isNaN

▸ **isNaN**(`value`: unknown): value is number

*Defined in [index.ts:132](https://github.com/carvjs/is/blob/main/src/index.ts#L132)*

Returns a Boolean `value` that indicates whether a value is the reserved value `NaN` (not a
number).

**`alias`** is.NaN

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is number

___

### isNativePromise

▸ **isNativePromise**\<T>(`value`: unknown): value is Promise\<T>

*Defined in [index.ts:372](https://github.com/carvjs/is/blob/main/src/index.ts#L372)*

Returns `true` for a native promise.

**`alias`** is.nativePromise

#### Type parameters:

Name | Description |
------ | ------ |
`T` | promise value type |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is Promise\<T>

___

### isNil

▸ **isNil**(`value`: unknown): value is null \| undefined

*Defined in [index.ts:226](https://github.com/carvjs/is/blob/main/src/index.ts#L226)*

Returns `true` if value is nullish (`null` or `undefined`).

**`alias`** is.nil

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is null \| undefined

___

### isNonEmptyArray

▸ **isNonEmptyArray**\<T>(`value`: unknown, `assertion?`: undefined \| (value: unknown) => value is T): value is T[]

*Defined in [index.ts:301](https://github.com/carvjs/is/blob/main/src/index.ts#L301)*

Returns `true` if `value` is an array with a length greater than zero and all of its items match the `assertion` (if provided).

**`alias`** is.nonEmptyArray

#### Type parameters:

Name | Description |
------ | ------ |
`T` | item type |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |
`assertion?` | undefined \| (value: unknown) => value is T | to apply to every element |

**Returns:** value is T[]

___

### isNonEmptyString

▸ **isNonEmptyString**(`value`: unknown): value is string

*Defined in [index.ts:72](https://github.com/carvjs/is/blob/main/src/index.ts#L72)*

Returns `true` if passed `value` is a string with a length greater than zero.

**`alias`** is.nonEmptyString

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is string

___

### isNull

▸ **isNull**(`value`: unknown): value is null

*Defined in [index.ts:216](https://github.com/carvjs/is/blob/main/src/index.ts#L216)*

Returns `true` if passed `value` is `null`.

**`alias`** is.null

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is null

___

### isNumber

▸ **isNumber**(`value`: unknown): value is number

*Defined in [index.ts:84](https://github.com/carvjs/is/blob/main/src/index.ts#L84)*

Returns `true` if passed `value` is a number excluding `NaN`.

**Note**: This intentionally deviates from typeof behavior to increase user-friendliness of is type checks.

**`alias`** is.number

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is number

___

### isObject

▸ **isObject**(`value`: unknown): value is object

*Defined in [index.ts:240](https://github.com/carvjs/is/blob/main/src/index.ts#L240)*

Return `true` if `value` is an object-like.

A value is object-like if it's not `null` and has a `typeof` result of `"object"`.

**Note** Keep in mind that functions are objects too.

**`alias`** is.object

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is object

___

### isPlainObject

▸ **isPlainObject**(`value`: unknown): value is object

*Defined in [index.ts:250](https://github.com/carvjs/is/blob/main/src/index.ts#L250)*

Return `true` if `value` is a plain object (an object created by `{}`, the `Object` constructor or one with a `[[Prototype]]` of `null`).

**`alias`** is.plainObject

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is object

___

### isPrimitive

▸ **isPrimitive**(`value`: unknown): value is Primitive

*Defined in [index.ts:189](https://github.com/carvjs/is/blob/main/src/index.ts#L189)*

Returns `true` if passed `value` is a [Primitive](README.md#primitive).

**`alias`** is.primitve

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is Primitive

___

### isPromise

▸ **isPromise**\<T>(`value`: unknown): value is Promise\<T>

*Defined in [index.ts:348](https://github.com/carvjs/is/blob/main/src/index.ts#L348)*

Returns `true` for any object with a `.then()` and `.catch()` method.

Prefer this one over `.nativePromise()` as you usually want to allow userland promise implementations too.

**`alias`** is.promise

#### Type parameters:

Name | Description |
------ | ------ |
`T` | promise value type |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is Promise\<T>

___

### isPromiseLike

▸ **isPromiseLike**\<T>(`value`: unknown): value is PromiseLike\<T>

*Defined in [index.ts:359](https://github.com/carvjs/is/blob/main/src/index.ts#L359)*

Returns `true` for any object with a `.then()` method.

**`alias`** is.promiseLike

#### Type parameters:

Name | Description |
------ | ------ |
`T` | promise value type |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is PromiseLike\<T>

___

### isRegExp

▸ **isRegExp**(`value`: unknown): value is RegExp

*Defined in [index.ts:335](https://github.com/carvjs/is/blob/main/src/index.ts#L335)*

Returns `true` if `value` is a RegExp.

**`alias`** is.regExp

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is RegExp

___

### isSafeInteger

▸ **isSafeInteger**(`value`: unknown): value is number

*Defined in [index.ts:122](https://github.com/carvjs/is/blob/main/src/index.ts#L122)*

Returns `true` if the `value` passed is a safe integer.

**`alias`** is.safeInteger

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is number

___

### isString

▸ **isString**(`value`: unknown): value is string

*Defined in [index.ts:54](https://github.com/carvjs/is/blob/main/src/index.ts#L54)*

Returns `true` if passed `value` is a string.

**`alias`** is.string

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is string

___

### isSymbol

▸ **isSymbol**(`value`: unknown): value is symbol

*Defined in [index.ts:159](https://github.com/carvjs/is/blob/main/src/index.ts#L159)*

Returns `true` if passed `value` is a symbol.

**`alias`** is.symbol

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is symbol

___

### isType

▸ **isType**(`value`: unknown, `type`: \"undefined\" \| \"object\" \| \"boolean\" \| \"number\" \| \"bigint\" \| \"string\" \| \"symbol\" \| \"function\"): boolean

*Defined in [index.ts:34](https://github.com/carvjs/is/blob/main/src/index.ts#L34)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | unknown |
`type` | \"undefined\" \| \"object\" \| \"boolean\" \| \"number\" \| \"bigint\" \| \"string\" \| \"symbol\" \| \"function\" |

**Returns:** boolean

___

### isUndefined

▸ **isUndefined**(`value`: unknown): value is undefined

*Defined in [index.ts:207](https://github.com/carvjs/is/blob/main/src/index.ts#L207)*

Returns `true` if passed `value` is `undefined`.

**`alias`** is.undefined

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is undefined

___

### isValidDate

▸ **isValidDate**(`value`: unknown): value is Date

*Defined in [index.ts:324](https://github.com/carvjs/is/blob/main/src/index.ts#L324)*

Returns `true` if `value` is a valid Date.

**`alias`** is.validDate

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is Date
