//1. Two Sum

/** function start here */

var twoSum = function (s, target) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    let tempTarget = target - s[i];
    if (map.has(tempTarget)) {
      return [map.get(tempTarget), i];
    } else {
      map.set(s[i], i);
    }
  }
};

/** tests start here */

test("test1", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});

test("test2", () => {
  expect(twoSum([3, 3], 6)).toStrictEqual([0, 1]);
});

test("test3", () => {
  expect().toBe();
});
