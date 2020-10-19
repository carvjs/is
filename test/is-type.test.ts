import { isType } from '../src'

test('null', () => {
  expect(isType(null, 'object')).toBe(true)
})
