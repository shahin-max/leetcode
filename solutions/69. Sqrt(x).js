/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function mySqrt(x) {
  if (x < 2) {
    return x;
  }
  if (x < 5) {
    return x >> 1;
  }
​
  let left = 2;
  let right = x >> 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
​
    if (mid ** 2 <= x) {
      if ((mid + 1) ** 2 > x) {
        return mid;
      }
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
​
  return left - 1;
};
​
