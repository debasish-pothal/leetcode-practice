/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let result = 0;
  const stack = [];
  let num = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch >= "0" && ch <= "9") {
      num = num * 10 + Number(ch);
    } else if (ch === "+") {
      result += sign * num;

      num = 0;
      sign = 1;
    } else if (ch === "-") {
      result += sign * num;

      num = 0;
      sign = -1;
    } else if (ch === "(") {
      stack.push(result);
      stack.push(sign);

      result = 0;
      sign = 1;
    } else if (ch === ")") {
      result += sign * num;

      num = 0;

      const prevSign = stack.pop();
      const prevResult = stack.pop();

      result = prevResult + prevSign * result;
    }
  }

  result += sign * num;
  return result;
};
