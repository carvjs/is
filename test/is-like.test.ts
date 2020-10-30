import * as is from '../src'

test('primitive', () => {
  const isNull = is.like(null)

  expect(isNull(null)).toBe(true)
  expect(isNull(undefined)).toBe(false)
})

test('predicate', () => {
  const fn = jest.fn(value => value)

  const match = is.like(fn)

  expect(match(true)).toBe(true)
  expect(match(null)).toBe(false)

  expect(fn).toHaveBeenCalledTimes(2)
  expect(fn).toHaveBeenNthCalledWith(1, true, undefined, undefined, undefined)
  expect(fn).toHaveBeenNthCalledWith(2, null, undefined, undefined, undefined)
})

test('predicates object', () => {
  const fn = jest.fn(value => value)

  const value = { a: Symbol('a'), b: Symbol('b'), c: Symbol('c') }
  const matcher = { a: fn, b: fn }

  expect(is.like(matcher)(value)).toBe(true)

  expect(fn).toHaveBeenCalledTimes(2)
  expect(fn).toHaveBeenNthCalledWith(1, value.a, 'a', value, matcher)
  expect(fn).toHaveBeenNthCalledWith(2, value.b, 'b', value, matcher)
})
