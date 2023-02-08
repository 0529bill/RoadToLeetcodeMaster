//22. Generate Parentheses

/** function start here */

const generateParenthesis = function (s) {
  const result = [];
  const helperFunc = (open, close, curr) => {
    if (curr.length >= s * 2) {
      result.push(curr.slice());
      return;
    }

    if (open > 0) {
      helperFunc(open - 1, close + 1, curr + "(");
    }

    if (close > 0) {
      helperFunc(open, close - 1, curr + ")");
    }
  };
  helperFunc(s, 0, "");
  return result;
};

/** tests start here */

test("test1", () => {
  expect(generateParenthesis(3)).toStrictEqual([
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()",
  ]);
});

test("test2", () => {
  expect(generateParenthesis(1)).toStrictEqual(["()"]);
});

// test("test3", () => {
//   expect(generateParenthesis(s)).toBe();
// });

/**
 * Tips and tricks:
 *
 *
 * 1. https://www.youtube.com/watch?v=s9fokUqJ76A
 *
 */
