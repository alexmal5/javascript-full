import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should get Infinity', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual([Infinity]);
});

it('should get string', () => {
  const result = getMinSquaredNumber('text');
  expect(result).toEqual([null]);
});

it('should get square of the least modulo number', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual([4]);
});
