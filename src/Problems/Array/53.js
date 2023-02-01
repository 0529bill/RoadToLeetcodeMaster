//53. Maximum Subarray

/** function start here */

function maxSubArray(sum) {
  let endPointer = 0;
  let tempSum = sum[0];
  let maxSum = sum[0];

  for (let i = 1; i < sum.length; i++) {
    while (tempSum < 0) {
      tempSum -= sum[endPointer];
      endPointer++;
    }
    tempSum += sum[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

// function maxSubArray(sum) {
//   let tempSum = sum[0];
//   let maxSum = sum[0];

//   for (let i = 1; i < sum.length; i++) {
//     while (tempSum < 0) {
//       tempSum = 0;
//     }
//     tempSum += sum[i];
//     maxSum = Math.max(tempSum, maxSum);
//   }
//   return maxSum;
// }

/** tests start here */

test("test1", () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});

test("test2", () => {
  expect(maxSubArray([1])).toBe(1);
});

test("test3", () => {
  expect(maxSubArray([-1])).toBe(-1);
});

test("test4", () => {
  expect(maxSubArray([-1, -3, -5])).toBe(-1);
});

/**
 * Tips and tricks:
 *
 */
