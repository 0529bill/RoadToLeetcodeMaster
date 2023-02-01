//217. Contains Duplicate

/** function start here */

function containsDuplicate(s) {
  return new Set(s).size !== s.length;
}

/** tests start here */

test("test1", () => {
  expect(containsDuplicate([1, 2, 3])).toBe(false);
});

test("test2", () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test("test3", () => {
  expect().toBe();
});

/**
 * Tips and tricks:
 *
 */
