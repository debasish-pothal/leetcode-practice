/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  const result = [];

  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      const totalOn =
        h.toString(2).split("1").length -
        1 +
        m.toString(2).split("1").length -
        1;

      if (totalOn === turnedOn) {
        result.push(`${h}:${m.toString().padStart(2, "0")}`);
      }
    }
  }

  return result;
};
