//733. Flood Fill

/** function start here */

var floodFill = function (image, sr, sc, newColor) {
  if (newColor === image[sr][sc]) return image;
  let oldColor = image[sr][sc];
  let rows = image.length,
    cols = image[0].length;
  let dfs = function (r, c) {
    if (r >= 0 && r < rows && c >= 0 && c < cols && image[r][c] === oldColor) {
      image[r][c] = newColor;
      dfs(r - 1, c);
      dfs(r + 1, c);
      dfs(r, c - 1);
      dfs(r, c + 1);
    }
  };
  dfs(sr, sc);
  return image;
};

/** tests start here */

test("test1", () => {
  expect(
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    )
  ).toStrictEqual([
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]);
});

test("test2", () => {
  expect(
    floodFill(
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      0,
      0,
      0
    )
  ).toStrictEqual([
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

// test("test3", () => {
//   expect(floodFill(s)).toBe([
//     [0, 0, 0],
//     [0, 0, 0],
//   ]);
// });

/**
 * Tips and tricks:
 *
 * Resources:
 *
 */
