export const { isArray } = Array
export const { isFinite, isInteger, isSafeInteger, isNaN } = Number

export {
  isArray as array,
  isFinite as finite,
  isInteger as integer,
  isSafeInteger as safeInteger,
  isNaN as NaN,
  isType as type,
  isString as string,
  isNumber as number,
  isBoolean as boolean,
  isFunction as function,
  isObject as object,
  isSymbol as symbol,
  isBigInt as bigInt,
  isPrimitive as primitive,
  isUndefined as undefined,
  isDefined as defined,
  isNull as null,
  isNil as nil,
  isDate as date,
  isRegExp as regExp,
  isPromiseLike as promiseLike,
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

export function isString(value: unknown): value is string {
  return isType(value, 'string')
}

export function isNumber(value: unknown): value is number {
  return isType(value, 'number')
}

export function isBoolean(value: unknown): value is boolean {
  return isType(value, 'boolean')
}

export function isFunction(value: unknown): value is Function {
  return isType(value, 'function')
}

export function isObject(value: unknown): value is object {
  return !isNil(value) && isType(value, 'object')
}

export function isSymbol(value: unknown): value is symbol {
  return isType(value, 'symbol') || value instanceof Symbol
}

export function isBigInt(value: unknown): value is bigint {
  return isType(value, 'bigint')
}

export function isPrimitive(
  value: unknown,
): value is null | undefined | boolean | number | bigint | string | symbol {
  return isNil(value) || /^[sbn]/.test(typeof value)
}

export function isDefined<T>(value: T): value is Exclude<T, undefined> {
  return value !== undefined
}

export function isUndefined(value: unknown): value is undefined {
  return value === undefined
}

export function isNull(value: unknown): value is null {
  return value === null
}

export function isNil(value: unknown): value is null | undefined {
  return value == null
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date
}

export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp
}

export function isPromiseLike(value: unknown): value is PromiseLike<any> {
  return !isNil(value) && isFunction((value as PromiseLike<any>).then)
}
