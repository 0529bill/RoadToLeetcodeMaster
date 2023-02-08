//67. Add Binary

/** function start here */

function addBinary(a, b) {
  let i = a.length - 1,
    j = b.length - 1,
    carry = 0,
    res = "";

  while (i >= 0 || j >= 0 || carry) {
    let num1 = +a[i] || 0,
      num2 = +b[j] || 0;
    let tempVal = num1 + num2 + carry;

    carry = tempVal > 1;
    res = (tempVal % 2) + res;
    i--;
    j--;
  }
  return res;
}

/** tests start here */

test("test1", () => {
  expect(addBinary("11", "1")).toBe("100");
});

test("test2", () => {
  expect(addBinary("1010", "1011")).toBe("10101");
});

// test("test3", () => {
//   expect(addBinary(s)).toBe();
// });

/**
 * Tips and tricks:
 *
 * Resources:
 *
 */
