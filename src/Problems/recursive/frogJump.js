// 青蛙跳臺階問題

// 問題一：一隻青蛙一次可以跳上一階臺階，也可以跳上二階臺階，請這隻可憐的青蛙跳上N階臺階有幾種方法？

/** function start here */

// Solution1: O(n2)
// function frogJump(s) {
//   if (s < 2) {
//     return s;
//   }
//   return frogJump(s - 1) + frogJump(s - 2);
// }

//Solution2: cached version O(n)
let cached = {};

function frogJump(s) {
  if (s <= 1) {
    return 1;
  } else if (s === 2) {
    return 2;
  }

  if (cached[s]) {
    return cached[s];
  }
  cached[s] = frogJump(s - 1, cached) + frogJump(s - 2, cached);
  return cached[s];
}

/** tests start here */

test("test1", () => {
  expect(frogJump(0)).toBe(1);
});

test("test2", () => {
  expect(frogJump(1)).toBe(1);
});

test("test3", () => {
  expect(frogJump(2)).toBe(2);
});

test("test3", () => {
  expect(frogJump(7)).toBe(21);
});

test("test3", () => {
  expect(frogJump(30)).toBe(1346269);
});

/**
 * Tips and tricks:
 *
 *
 * Resources: https://juejin.cn/post/6961961154780332045
 */
