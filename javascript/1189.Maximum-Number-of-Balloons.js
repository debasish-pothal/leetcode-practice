/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const chars = ["b", "a", "l", "o", "n"];
  const map = new Map();

  for (const char of text) {
    if (chars.includes(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }

  for (const char of chars) {
    if (!map.has(char)) {
      return 0;
    }
  }

  return Math.min(
    map.get("b"),
    map.get("a"),
    Math.floor(map.get("l") / 2),
    Math.floor(map.get("o") / 2),
    map.get("n")
  );
};
