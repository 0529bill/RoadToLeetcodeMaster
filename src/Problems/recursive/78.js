//78. Subsets

/** function start here */

let subsets = function (arr) {
  let result = [];
  let helperFunc = (index, tempArr) => {
    result.push(tempArr.slice());

    for (let i = index; i < arr.length; i++) {
      tempArr.push(arr[i]);
      helperFunc(i + 1, tempArr);
      tempArr.pop();
    }
  };
  helperFunc(0, []);
  return result;
};

/** tests start here */

function sortArrays(arrays) {
  return arrays.sort((a, b) => a.length - b.length);
}

test("test1", () => {
  expect(sortArrays(subsets([1, 2, 3]))).toStrictEqual([
    [],
    [1],
    [2],
    [3],
    [1, 2],
    [1, 3],
    [2, 3],
    [1, 2, 3],
  ]);
});

test("test2", () => {
  expect(sortArrays(subsets([0]))).toStrictEqual([[], [0]]);
});

// test("test3", () => {
//   expect(subsets(s)).toBe();
// });

/**
 * Tips and tricks:
 *
 * Resources:
 *
 */
