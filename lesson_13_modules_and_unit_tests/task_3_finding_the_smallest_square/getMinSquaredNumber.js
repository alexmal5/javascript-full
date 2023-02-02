export const getMinSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const abs = arr.map((num) => Math.abs(num));
  const min = Math.min(...abs);
  return min * min;
};
getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
