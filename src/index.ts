export {
  isType as type,
  isString as string,
  isEmptyString as emptyString,
  isNonEmptyString as nonEmptyString,
  isNumber as number,
  isBoolean as boolean,
  isFinite as finite,
  isInfinite as infinite,
  isInteger as integer,
  isSafeInteger as safeInteger,
  isNaN as NaN,
  isFunction as function,
  isSymbol as symbol,
  isBigInt as bigint,
  isPrimitive as primitive,
  isUndefined as undefined,
  isDefined as defined,
  isNull as null,
  isNil as nil,
  isObject as object,
  isPlainObject as plainObject,
  isArray as array,
  isEmptyArray as emptyArray,
  isNonEmptyArray as nonEmptyArray,
  isDate as date,
  isValidDate as validDate,
  isRegExp as regExp,
  isPromise as promise,
  isPromiseLike as promiseLike,
  isNativePromise as nativePromise,
}

export function isType(
  value: unknown,
  type:
    | 'undefined'
    | 'object'
    | 'boolean'
    | 'number'
    | 'bigint'
    | 'string'
    | 'symbol'
    | 'function',
): boolean {
  return typeof value === type
}

/**
 * Returns `true` if passed `value` is a string.
 * @param value to check
 * @alias is.string
 */
export function isString(value: unknown): value is string {
  return isType(value, 'string')
}

/**
 * Returns `true` if passed `value` is a string with a length of zero.
 * @param value to check
 * @alias is.emptyString
 */
export function isEmptyString(value: unknown): value is '' {
  return value === ''
}

/**
 * Returns `true` if passed `value` is a string with a length greater than zero.
 * @param value to check
 * @alias is.nonEmptyString
 */
export function isNonEmptyString(value: unknown): value is string {
  return isString(value) && value.length > 0
}

/**
 * Returns `true` if passed `value` is a number excluding `NaN`.
 *
 * **Note**: This intentionally deviates from typeof behavior to increase user-friendliness of is type checks.
 *
 * @param value to check
 * @alias is.number
 */
export function isNumber(value: unknown): value is number {
  return isType(value, 'number') && !isNaN(value)
}

/**
 * Returns `true` if passed `value` is finite.
 *
 * @param value to check
 * @alias is.finite
 */
export function isFinite(value: unknown): value is number {
  return Number.isFinite(value)
}

/**
 * Returns `true` if passed `value` is infinite (`Infinite` or `+Infinite`).
 *
 * @param value to check
 * @alias is.infinite
 */
export function isInfinite(value: unknown): value is number {
  return value === Infinity || value === -Infinity
}

/**
 * Returns `true` if the `value` passed is an integer, `false` otherwise.
 * @param value to check
 * @alias is.integer
 */
export function isInteger(value: unknown): value is number {
  return Number.isInteger(value)
}

/**
 * Returns `true` if the `value` passed is a safe integer.
 * @param value to check
 * @alias is.safeInteger
 */
export function isSafeInteger(value: unknown): value is number {
  return Number.isSafeInteger(value)
}

/**
 * Returns a Boolean `value` that indicates whether a value is the reserved value `NaN` (not a
 * number).
 * @param value to check
 * @alias is.NaN
 */
export function isNaN(value: unknown): value is number {
  return Number.isNaN(value)
}

/**
 * Returns `true` if passed `value` is a boolean.
 * @param value to check
 * @alias is.boolean
 */
export function isBoolean(value: unknown): value is boolean {
  return isType(value, 'boolean')
}

/**
 * Returns `true` if passed `value` is a function.
 * @param value to check
 * @alias is.function
 */
export function isFunction(value: unknown): value is Function {
  return isType(value, 'function')
}

/**
 * Returns `true` if passed `value` is a symbol.
 * @param value to check
 * @alias is.symbol
 */
export function isSymbol(value: unknown): value is symbol {
  return isType(value, 'symbol') || value instanceof Symbol
}

/**
 * Returns `true` if passed `value` is a bigint.
 * @param value to check
 * @alias is.bigint
 */
export function isBigInt(value: unknown): value is bigint {
  return isType(value, 'bigint')
}

/**
 * Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
 */
export type Primitive =
  | null
  | undefined
  | boolean
  | number
  | bigint
  | string
  | symbol

/**
 * Returns `true` if passed `value` is a {@link Primitive}.
 * @param value to check
 * @alias is.primitve
 */
export function isPrimitive(value: unknown): value is Primitive {
  return isNil(value) || /^[sbn]/.test(typeof value)
}

/**
 * Returns `true` if passed `value` is not `undefined`.
 * @param value to check
 * @alias is.defined
 */
export function isDefined<T>(value: T): value is Exclude<T, undefined> {
  return value !== undefined
}

/**
 * Returns `true` if passed `value` is `undefined`.
 * @param value to check
 * @alias is.undefined
 */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

/**
 * Returns `true` if passed `value` is `null`.
 * @param value to check
 * @alias is.null
 */
export function isNull(value: unknown): value is null {
  return value === null
}

/**
 * Returns `true` if value is nullish (`null` or `undefined`).
 *
 * @param value to check
 * @alias is.nil
 */
export function isNil(value: unknown): value is null | undefined {
  return value == null
}

/**
 * Return `true` if `value` is an object-like.
 *
 * A value is object-like if it's not `null` and has a `typeof` result of `"object"`.
 *
 * **Note** Keep in mind that functions are objects too.
 *
 * @param value to check
 * @alias is.object
 */
export function isObject(value: unknown): value is object {
  return !isNil(value) && isType(value, 'object')
}

/**
 * Return `true` if `value` is a plain object (an object created by `{}`, the `Object` constructor or one with a `[[Prototype]]` of `null`).
 *
 * @param value to check
 * @alias is.plainObject
 */
export function isPlainObject(value: unknown): value is object {
  if (!isObject(value)) {
    return false
  }

  const prototype = Object.getPrototypeOf(value)

  return prototype === null || prototype === Object.getPrototypeOf({})
}

/**
 * Returns `true` if `value` is an array and all of its items match the `assertion` (if provided).
 *
 * @typeparam T item type
 * @param value to check
 * @param assertion to apply to every element
 * @alias is.array
 */
export function isArray<T = any>(
  value: unknown,
  assertion?: (value: unknown) => value is T,
): value is T[] {
  if (!Array.isArray(value)) {
    return false
  }

  if (!isFunction(assertion)) {
    return true
  }

  return value.every(assertion)
}

/**
 * Returns `true` if `value` is an array with a length of zero.
 *
 * @param value to check
 * @alias is.emptyArray
 */
export function isEmptyArray(value: unknown): value is never[] {
  return isArray(value) && value.length === 0
}

/**
 * Returns `true` if `value` is an array with a length greater than zero and all of its items match the `assertion` (if provided).
 *
 * @typeparam T item type
 * @param value to check
 * @param assertion to apply to every element
 * @alias is.nonEmptyArray
 */
export function isNonEmptyArray<T = any>(
  value: unknown,
  assertion?: (value: unknown) => value is T,
): value is T[] {
  return isArray(value, assertion) && value.length > 0
}

/**
 * Returns `true` if `value` is a Date.
 *
 * @param value to check
 * @alias is.date
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

/**
 * Returns `true` if `value` is a valid Date.
 *
 * @param value to check
 * @alias is.validDate
 */
export function isValidDate(value: unknown): value is Date {
  // If the date object is invalid it will return 'NaN' on getTime()
  return isDate(value) && !isNaN(value.getTime())
}

/**
 * Returns `true` if `value` is a RegExp.
 *
 * @param value to check
 * @alias is.regExp
 */
export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp
}

/**
 * Returns `true` for any object with a `.then()` and `.catch()` method.
 *
 * Prefer this one over `.nativePromise()` as you usually want to allow userland promise implementations too.
 *
 * @typeparam T promise value type
 * @param value to check
 * @alias is.promise
 */
export function isPromise<T = any>(value: unknown): value is Promise<T> {
  return isPromiseLike(value) && isFunction((value as Promise<any>).catch)
}

/**
 * Returns `true` for any object with a `.then()` method.
 *
 * @typeparam T promise value type
 * @param value to check
 * @alias is.promiseLike
 */
export function isPromiseLike<T = any>(
  value: unknown,
): value is PromiseLike<T> {
  return !isNil(value) && isFunction((value as PromiseLike<any>).then)
}

/**
 * Returns `true` for a native promise.
 *
 * @typeparam T promise value type
 * @param value to check
 * @alias is.nativePromise
 */
export function isNativePromise<T = any>(value: unknown): value is Promise<T> {
  return value instanceof Promise
}
