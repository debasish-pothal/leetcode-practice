/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const n = s.length;
  const freq = Array(26).fill(0);

  for (const c of s) {
    freq[c.charCodeAt(0) - 97] += 1;
  }

  let maxFreq = 0;
  let maxChar = 0;

  for (let i = 0; i < 26; i++) {
    if (freq[i] > maxFreq) {
      maxFreq = freq[i];
      maxChar = i;
    }
  }

  if (maxFreq > Math.ceil(n / 2)) return "";

  const result = Array(n);
  let idx = 0;

  while (freq[maxChar]) {
    result[idx] = String.fromCharCode(maxChar + 97);
    idx += 2;
    freq[maxChar] -= 1;
  }

  for (let i = 0; i < 26; i++) {
    while (freq[i]) {
      if (idx >= n) idx = 1;
      result[idx] = String.fromCharCode(i + 97);
      idx += 2;
      freq[i] -= 1;
    }
  }

  return result.join("");
};
