//125. Valid Palindrome

/** function start here */

var isPalindrome = function (s) {
  let regex = /[a-z]/;
  let result = s
    .toLowerCase()
    .split("")
    .filter((val) => regex.test(val));
  return result.join("") === result.reverse().join("");
};

/** tests start here */

test("test1", () => {
  expect(isPalindrome("")).toBe(true);
});

test("test1", () => {
  expect(isPalindrome("09")).toBe(true);
});

test("test2", () => {
  expect(isPalindrome("aba")).toBe(true);
});

test("test3", () => {
  expect(isPalindrome("a b ## a")).toBe(true);
});

test("test3", () => {
  expect(isPalindrome("c")).toBe(true);
});

test("test3", () => {
  expect(isPalindrome("ca")).toBe(false);
});

test("test3", () => {
  expect(isPalindrome("ca cd ")).toBe(false);
});

//comments

/**
 *  1. input includes Both numbers and string!
 *
 *
 *
 */
