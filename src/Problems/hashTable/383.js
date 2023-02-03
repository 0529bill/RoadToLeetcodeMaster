//383. Ransom Note

/** function start here */

var canConstruct = function (ransomNote, magazine) {
  let newMap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    let tempMag = magazine[i];
    if (newMap.has(tempMag)) {
      let tempCount = newMap.get(tempMag);
      newMap.set(tempMag, tempCount + 1);
    } else {
      newMap.set(tempMag, 1);
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    let tempRansom = ransomNote[i];
    if (newMap.has(tempRansom)) {
      let tempCount = newMap.get(tempRansom);
      if (!tempCount) return false;
      newMap.set(tempRansom, tempCount - 1);
    } else {
      return false;
    }
  }
  return true;
};

/** tests start here */

test("test1", () => {
  expect(canConstruct("aa", "ab")).toBe(false);
});

test("test2", () => {
  expect(canConstruct("aa", "aab")).toBe(true);
});

// test("test3", () => {
//   expect(canConstruct(s)).toBe();
// });

/**
 * Tips and tricks:
 *
 */
