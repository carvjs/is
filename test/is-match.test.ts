import * as is from '../src'

test('primitive', () => {
  expect(is.match(null, null)).toBe(true)
  expect(is.match(null, undefined)).toBe(false)
})

test('empty object', () => {
  const object = {}
  expect(is.match(object, object)).toBe(true)
  expect(is.match(object, {})).toBe(true)
})

test('deeply nested', () => {
  expect(
    is.match({ a: { b: { c: { x: NaN } } } }, { a: { b: { c: { x: NaN } } } }),
  ).toBe(true)

  expect(
    is.match(
      { a: { b: { c: { x: true } } } },
      { a: { b: { c: { x: false } } } },
    ),
  ).toBe(false)
})

test('additional properties on value', () => {
  expect(is.match({ a: false, b: true }, { a: is.boolean })).toBe(true)
})

test('additional properties on matcher', () => {
  expect(is.match({ a: false, b: true }, { a: is.boolean, c: is.number })).toBe(
    false,
  )
})

test('SameValueZero', () => {
  expect(is.match(0, -0)).toBe(true)
  expect(is.match(0, 0)).toBe(true)
  expect(is.match(NaN, NaN)).toBe(true)
  expect(is.match({ a: 1, b: 0, c: NaN }, { a: 1, b: -0, c: NaN })).toBe(true)
})

test('Same function', () => {
  const fn = jest.fn()
  expect(is.match(fn, fn)).toBe(true)
  expect(is.match({ fn }, { fn })).toBe(true)
  expect(fn).not.toHaveBeenCalled()
})

test('predicate function', () => {
  expect(is.match(null, is.null)).toBe(true)
  expect(is.match(null, is.undefined)).toBe(false)

  const fn = jest.fn(value => value)
  const value = Symbol('value')
  expect(is.match(value, fn)).toBe(true)

  expect(fn).toHaveBeenCalledTimes(1)
  expect(fn).toHaveBeenCalledWith(value, undefined, undefined, undefined)
})

test('predicates object', () => {
  const fn = jest.fn(value => value)

  const value = { a: Symbol('a'), b: Symbol('b'), c: Symbol('c') }
  const matcher = { a: fn, b: fn }

  expect(is.match(value, matcher)).toBe(true)

  expect(fn).toHaveBeenCalledTimes(2)
  expect(fn).toHaveBeenNthCalledWith(1, value.a, 'a', value, matcher)
  expect(fn).toHaveBeenNthCalledWith(2, value.b, 'b', value, matcher)
})
