import * as is from '../src'

test('null', () => {
  expect(is.type(null, 'object')).toBe(true)
})

test.each([
  ['Object.create(null)', true, Object.create(null)],
  ['Object.create({})', false, Object.create({})],
  ['Object.create(Object.prototype)', true, Object.create(Object.prototype)],
  ['{}', true, {}],
  ['{x: "y"}', true, { x: 'y' }],
  // eslint-disable-next-line no-new-object
  ['new Object()', true, new Object()],
  ['class X {}', false, class X {}],
  ['new (class X {})', false, new (class X {})()],
  ['new Date()', false, new Date()],
  ['Object', false, Object],
  ['Object.is', false, Object.is],
  ['null', false, null],
  ['undefined', false, undefined],
])('is.plainObject(%s) => %s', (_description, expected, value) => {
  expect(is.plainObject(value)).toBe(expected)
})
