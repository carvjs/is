> Globals

# @carv/is - v1.1.0

## Index

### Interfaces

* [Predicates](interfaces/predicates.md)

### Type aliases

* [MatchPredicate](README.md#matchpredicate)
* [Matcher](README.md#matcher)
* [Predicate](README.md#predicate)
* [Primitive](README.md#primitive)

### Functions

* [isArray](README.md#isarray)
* [isBigInt](README.md#isbigint)
* [isBoolean](README.md#isboolean)
* [isDate](README.md#isdate)
* [isDefined](README.md#isdefined)
* [isEmptyArray](README.md#isemptyarray)
* [isEmptyString](README.md#isemptystring)
* [isEqual](README.md#isequal)
* [isFinite](README.md#isfinite)
* [isFunction](README.md#isfunction)
* [isInfinite](README.md#isinfinite)
* [isInteger](README.md#isinteger)
* [isLike](README.md#islike)
* [isMatch](README.md#ismatch)
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

### MatchPredicate

Ƭ  **MatchPredicate**: (value: unknown) => boolean

*Defined in [index.ts:418](https://github.com/carvjs/is/blob/main/src/index.ts#L418)*

___

### Matcher

Ƭ  **Matcher**: [Predicate](README.md#predicate) \| [Predicates](interfaces/predicates.md) \| unknown

*Defined in [index.ts:416](https://github.com/carvjs/is/blob/main/src/index.ts#L416)*

___

### Predicate

Ƭ  **Predicate**: (this: undefined, value: any, key: undefined, object: any, matcher: undefined) => unknown \| \<T>(this: T, value: any, key: string, object: any, matcher: T) => unknown

*Defined in [index.ts:395](https://github.com/carvjs/is/blob/main/src/index.ts#L395)*

___

### Primitive

Ƭ  **Primitive**: null \| undefined \| boolean \| number \| bigint \| string \| symbol

*Defined in [index.ts:189](https://github.com/carvjs/is/blob/main/src/index.ts#L189)*

Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

## Functions

### isArray

▸ **isArray**\<T>(`value`: unknown, `assertion?`: undefined \| (value: unknown) => value is T): value is T[]

*Defined in [index.ts:287](https://github.com/carvjs/is/blob/main/src/index.ts#L287)*

Returns `true` if `value` is an array and all of its items match the `assertion` (if provided).

```js
is.array(value); // Validate `value` is an array.
is.array(value, is.number); // Validate `value` is an array and all of its items are numbers.
```

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

*Defined in [index.ts:182](https://github.com/carvjs/is/blob/main/src/index.ts#L182)*

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

*Defined in [index.ts:155](https://github.com/carvjs/is/blob/main/src/index.ts#L155)*

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

*Defined in [index.ts:333](https://github.com/carvjs/is/blob/main/src/index.ts#L333)*

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

*Defined in [index.ts:212](https://github.com/carvjs/is/blob/main/src/index.ts#L212)*

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

*Defined in [index.ts:308](https://github.com/carvjs/is/blob/main/src/index.ts#L308)*

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

*Defined in [index.ts:77](https://github.com/carvjs/is/blob/main/src/index.ts#L77)*

Returns `true` if passed `value` is a string with a length of zero.

**`alias`** is.emptyString

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is ""

___

### isEqual

▸ **isEqual**(`value`: unknown, `other`: unknown): boolean

*Defined in [index.ts:59](https://github.com/carvjs/is/blob/main/src/index.ts#L59)*

Performs a [SameValueZero](https://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) comparison
between two values to determine if they are equivalent.

**Note** SameValueZero differs from SameValue only in its treatment of `+0` and `-0`.
For SameValue comparison use `Object.is()`.

#### Parameters:

Name | Type |
------ | ------ |
`value` | unknown |
`other` | unknown |

**Returns:** boolean

___

### isFinite

▸ **isFinite**(`value`: unknown): value is number

*Defined in [index.ts:108](https://github.com/carvjs/is/blob/main/src/index.ts#L108)*

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

*Defined in [index.ts:164](https://github.com/carvjs/is/blob/main/src/index.ts#L164)*

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

*Defined in [index.ts:118](https://github.com/carvjs/is/blob/main/src/index.ts#L118)*

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

*Defined in [index.ts:127](https://github.com/carvjs/is/blob/main/src/index.ts#L127)*

Returns `true` if the `value` passed is an integer, `false` otherwise.

**`alias`** is.integer

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is number

___

### isLike

▸ **isLike**(`matcher`: [Matcher](README.md#matcher)): [MatchPredicate](README.md#matchpredicate)

*Defined in [index.ts:437](https://github.com/carvjs/is/blob/main/src/index.ts#L437)*

Creates a function that invokes the predicate properties of `matcher` with the corresponding property values of a given object,
returning `true` if all predicates return truthy, else `false`.

```js
[
 { 'a': 2, 'b': 1 },
 { 'a': 1, 'b': 2 }
].filter(is.like({ 'b': (n) => n > 1 }))
// => [{ 'a': 1, 'b': 2 }]
```

**Note**: The created function is equivalent to [isMatch](README.md#ismatch) with `source` partially applied.

**`alias`** is.like

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`matcher` | [Matcher](README.md#matcher) | The object of property predicates to conform to. |

**Returns:** [MatchPredicate](README.md#matchpredicate)

___

### isMatch

▸ **isMatch**(`value`: unknown, `matcher`: [Matcher](README.md#matcher)): boolean

*Defined in [index.ts:462](https://github.com/carvjs/is/blob/main/src/index.ts#L462)*

Checks if `value` conforms to `matcher` by invoking the predicate properties
of `matcher` with the corresponding property values of `value`.

```js
var object = { 'a': 1, 'b': 2 };

isMatch(object, { 'b': (n) => n > 1 });
// => true

isMatch(object, { 'b': (n) => n > 2 });
// => false
```

**Note**: This method is equivalent to [isLike](README.md#islike) when `matcher` is partially applied.

**`alias`** is.match

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to inspect. |
`matcher` | [Matcher](README.md#matcher) | to conform to. |

**Returns:** boolean

Returns `true` if `value` matches, else `false`.

___

### isNaN

▸ **isNaN**(`value`: unknown): value is number

*Defined in [index.ts:146](https://github.com/carvjs/is/blob/main/src/index.ts#L146)*

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

*Defined in [index.ts:391](https://github.com/carvjs/is/blob/main/src/index.ts#L391)*

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

*Defined in [index.ts:240](https://github.com/carvjs/is/blob/main/src/index.ts#L240)*

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

*Defined in [index.ts:320](https://github.com/carvjs/is/blob/main/src/index.ts#L320)*

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

*Defined in [index.ts:86](https://github.com/carvjs/is/blob/main/src/index.ts#L86)*

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

*Defined in [index.ts:230](https://github.com/carvjs/is/blob/main/src/index.ts#L230)*

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

*Defined in [index.ts:98](https://github.com/carvjs/is/blob/main/src/index.ts#L98)*

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

*Defined in [index.ts:254](https://github.com/carvjs/is/blob/main/src/index.ts#L254)*

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

*Defined in [index.ts:264](https://github.com/carvjs/is/blob/main/src/index.ts#L264)*

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

*Defined in [index.ts:203](https://github.com/carvjs/is/blob/main/src/index.ts#L203)*

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

*Defined in [index.ts:367](https://github.com/carvjs/is/blob/main/src/index.ts#L367)*

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

*Defined in [index.ts:378](https://github.com/carvjs/is/blob/main/src/index.ts#L378)*

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

*Defined in [index.ts:354](https://github.com/carvjs/is/blob/main/src/index.ts#L354)*

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

*Defined in [index.ts:136](https://github.com/carvjs/is/blob/main/src/index.ts#L136)*

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

*Defined in [index.ts:68](https://github.com/carvjs/is/blob/main/src/index.ts#L68)*

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

*Defined in [index.ts:173](https://github.com/carvjs/is/blob/main/src/index.ts#L173)*

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

*Defined in [index.ts:37](https://github.com/carvjs/is/blob/main/src/index.ts#L37)*

#### Parameters:

Name | Type |
------ | ------ |
`value` | unknown |
`type` | \"undefined\" \| \"object\" \| \"boolean\" \| \"number\" \| \"bigint\" \| \"string\" \| \"symbol\" \| \"function\" |

**Returns:** boolean

___

### isUndefined

▸ **isUndefined**(`value`: unknown): value is undefined

*Defined in [index.ts:221](https://github.com/carvjs/is/blob/main/src/index.ts#L221)*

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

*Defined in [index.ts:343](https://github.com/carvjs/is/blob/main/src/index.ts#L343)*

Returns `true` if `value` is a valid Date.

**`alias`** is.validDate

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`value` | unknown | to check |

**Returns:** value is Date
