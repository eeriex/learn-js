const wc = require('./word-count')

test('called with parameters different than string should return -1', () => {
  expect(wc(null, null)).toBe(-1)
  expect(wc(null, 2)).toBe(-1)
  expect(wc(1, null)).toBe(-1)
  expect(wc(1, 2)).toBe(-1)
})

test('called with empty parameters should return 0', () => {
  expect(wc("", "")).toBe(0)
  expect(wc("", "cats")).toBe(0)
  expect(wc("cats", "")).toBe(0)
})

test('Dor case', () => {
  expect(wc("whoever is the who that who's there", "who")).toBe(1)
})
