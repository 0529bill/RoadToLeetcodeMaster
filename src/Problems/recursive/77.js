//77. Combinations

/** function start here */

function combine(n, k) {
  let result = [];
  let helperFunc = (first, arr) => {
    if (arr.length === k) {
      console.log("arr", arr);
      //shallow copy
      return result.push(arr.slice());
    }

    if (arr.length < k) {
      for (let i = first; i <= n; i++) {
        arr.push(i);
        helperFunc(i + 1, arr);
        arr.pop();
      }
    }
  };
  helperFunc(1, []);
  return result;
}

/** tests start here */
test("test1", () => {
  expect(combine(4, 2)).toStrictEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4],
  ]);
});

// test("test2", () => {
//   expect(combine(1, 1)).toBe([[1]]);
// });

// test("test3", () => {
//   expect(combine(s)).toBe();
// });

/**
 * Tips and tricks:
 *
 * Resources:
 *
 */
