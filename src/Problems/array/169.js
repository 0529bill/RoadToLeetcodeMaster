// 169. Majority Element

/** function start here */

function majorityElement(nums) {
  let limit = nums.length / 2;
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }

    if (map[nums[i]] > limit) {
      return nums[i];
    }
  }
}

/** tests start here */

test("test1", () => {
  expect(majorityElement([3, 2, 3])).toBe(3);
});

test("test2", () => {
  expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
});

/**
 * Tips and tricks:
 *
 * Resources:
 *
 */
