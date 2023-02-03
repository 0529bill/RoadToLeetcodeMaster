//242. Valid Anagram

/** function start here */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sArray = s.split("");
  let tArray = t.split("");
  let countedObject = sArray.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr] += 1;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});

  for (let i = 0; i < tArray.length; i++) {
    if (countedObject[tArray[i]]) {
      countedObject[tArray[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};

/** tests start here */

test("test1", () => {
  expect(isAnagram("t", "t")).toBe(true);
});

test("test2", () => {
  expect(isAnagram("ts", "ta")).toBe(false);
});

test("test3", () => {
  expect(isAnagram("tsbc", "csbt")).toBe(true);
});

test("test3", () => {
  expect(isAnagram("ab", "a")).toBe(false);
});

/**
 * Tips and tricks:
 *
 * 1. sort the string and compare
 * 2. use a map to count the number of each character
 */
