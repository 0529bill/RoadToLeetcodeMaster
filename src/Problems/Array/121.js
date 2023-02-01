//121. Best Time to Buy and Sell Stock

/** function start here */

var maxProfit = function (prices) {
  let lowest = prices[0];
  let maxValue = 0;

  for (let i = 0; i < prices.length; i++) {
    lowest = Math.min(lowest, prices[i]);
    let currMax = prices[i] - lowest;
    maxValue = Math.max(maxValue, currMax);
  }
  return maxValue;
};
/** tests start here */

test("test1", () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
});

test("test2", () => {
  expect(maxProfit([1])).toBe(0);
});

test("test3", () => {
  expect(maxProfit([7, 6, 5, 4, 3, 2, 1])).toBe(0);
});

/**
 *
 */
