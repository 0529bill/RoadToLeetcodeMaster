//3. Longest Substring Without Repeating Characters

/** function start here */

// const lengthOfLongestSubstring = function (s) {
//   const set = new Set();
//   let largestLength = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (set.has(s[i])) {
//       set.clear();
//     }

//     set.add(s[i]);
//     largestLength = Math.max(largestLength, set.size);
//   }
//   return largestLength;
// };

var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxCount = 0;
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxCount = Math.max(maxCount, set.size);
  }
  return maxCount;
};

/** tests start here */

test("test1", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
});

test("test2", () => {
  expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
});

test("test3", () => {
  expect(lengthOfLongestSubstring("a")).toBe(1);
});

test("test4", () => {
  expect(lengthOfLongestSubstring("au")).toBe(2);
});

test("test5", () => {
  expect(lengthOfLongestSubstring("dvdf")).toBe(3);
});

/**
 *
 * 1. use Set and forLoop
 *
 */
