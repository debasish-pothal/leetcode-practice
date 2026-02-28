/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const splitRemaining = (remaining, fillTimes) => {
  const base = Math.floor(remaining / fillTimes);
  const remainder = remaining % fillTimes;

  return Array.from({ length: fillTimes }, (_, i) =>
    i < remainder ? base + 1 : base
  );
};

var fullJustify = function (words, maxWidth) {
  const result = [];
  let wIdx = 0;

  while (wIdx < words.length) {
    let currLength = 0;
    const line = [];

    while (wIdx < words.length) {
      const word = words[wIdx];
      const extra = line.length === 0 ? 0 : 1;

      if (currLength + word.length + extra > maxWidth) break;

      currLength += word.length + extra;
      line.push(word);

      wIdx += 1;
    }

    let lineLength = 0;
    for (const word of line) {
      lineLength += word.length;
    }

    const remaining = maxWidth - lineLength;
    const gaps = line.length - 1;
    const isLastLine = wIdx === words.length;

    if (isLastLine || gaps <= 0) {
      let lineStr = line.join(" ");
      lineStr += " ".repeat(maxWidth - lineStr.length);
      result.push(lineStr);
    } else {
      const spaces = splitRemaining(remaining, gaps);
      let lineStr = "";

      for (let i = 0; i < line.length; i++) {
        lineStr += line[i];
        lineStr += " ".repeat(spaces[i] || 0);
      }

      result.push(lineStr);
    }
  }

  return result;
};
