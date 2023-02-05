// 青蛙跳臺階問題2

// 問題：一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级……它也可以跳上 n 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

/** function start here */

function frogJump2(s) {
  return Math.pow(2, s - 1);
}

/** tests start here */

test("test1", () => {
  expect().toBe();
});

/**
 * Tips and tricks:
 *
 *
 * Resources: https://blog.nowcoder.net/n/e7a911172c74462f9c25fba896056c54?from=nowcoder_improve
 */
