import { reverseArray, withdraw, getAdults } from './index';

it('should get inverted array', () => {
  const result = reverseArray([2, 5, 3, 8, 5, 9]);
  expect(result).toEqual([9, 5, 8, 3, 5, 2]);
});

it('should get null', () => {
  const result = reverseArray(2, 5);
  expect(result).toEqual(null);
});

it('should get string', () => {
  const result = reverseArray(['text']);
  expect(result).toEqual(['text']);
});

it('should get 37', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it('should get -1', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it('should get 1400', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 0);
  expect(result).toEqual(1400);
});

it('should get Adults', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get empty object', () => {
  const result = getAdults({});
  expect(result).toEqual({});
});

it('should get Adults', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17.99, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});
