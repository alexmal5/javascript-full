import { calc } from './calculator.js';

it('should get 4', () => {
  const result = calc('2 + 2');
  expect(result).toEqual('4');
});

it('should get 0', () => {
  const result = calc('2 - 2');
  expect(result).toEqual('0');
});

it('should get 4', () => {
  const result = calc('2 * 2');
  expect(result).toEqual('4');
});

it('should get 1', () => {
  const result = calc('2 / 2');
  expect(result).toEqual('1');
});

it('should get null', () => {
  const result = calc(2);
  expect(result).toEqual('null');
});
