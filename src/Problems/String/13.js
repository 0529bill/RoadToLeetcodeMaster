//No. 13
//Roman to Integer

var functionXXX = function (s) {
  let romanMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanMap.get(s[i - 1]) < romanMap.get(s[i])) {
      result -= 2 * romanMap.get(s[i - 1]);
    }
    result += romanMap.get(s[i]);
  }
  return result;
};

/** tests start here */

test("test1", () => {
  expect(functionXXX("III")).toBe(3);
});

test("test2", () => {
  expect(functionXXX("CXL")).toBe(140);
});

test("test3", () => {
  expect(functionXXX("LVIII")).toBe(58);
});

test("test4", () => {
  expect(functionXXX("MCMXCIV")).toBe(1994);
});
