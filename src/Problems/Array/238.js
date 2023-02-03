//238. Product of Array Except Self

/** function start here */

const productExceptSelf = function (nums) {
  if (nums === null || nums.length <= 1) {
    return [];
  }
  let n = nums.length;
  let preFix = new Array(n),
    postFix = new Array(n),
    result = new Array(n);

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      preFix[i] = nums[i];
    } else {
      preFix[i] = preFix[i - 1] * nums[i];
    }
  }

  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1) {
      postFix[i] = nums[i];
    } else {
      postFix[i] = postFix[i + 1] * nums[i];
    }
  }

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result[i] = 1 * postFix[i + 1];
    } else if (i === n - 1) {
      result[i] = preFix[i - 1] * 1;
    } else {
      result[i] = preFix[i - 1] * postFix[i + 1];
    }
  }

  return result;
};

/** tests start here */

test("test1", () => {
  expect(
    JSON.parse(JSON.stringify(productExceptSelf([1, 2, 3, 4])))
  ).toStrictEqual([24, 12, 8, 6]);
});

test("test2", () => {
  expect(
    JSON.parse(JSON.stringify(productExceptSelf([-1, 1, 0, -3, 3])))
  ).toEqual([0, 0, 9, 0, 0]);
});

// jest not distinguish between negative zero and positive zero?: https://stackoverflow.com/questions/48405174/how-to-make-jest-not-distinguish-between-negative-zero-and-positive-zero

/**
 * Tips and tricks:
 *
 *
 * Resources:  https://www.youtube.com/watch?v=bNvIQI2wAjk&t=193s
 * Space complexity: O(1) solution: https://leetcode.com/problems/product-of-array-except-self/solutions/796378/two-js-solutions/?q=js&orderBy=most_votes
 *
 */
