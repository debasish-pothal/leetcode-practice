/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const dp = Array(n + 1).fill(false);
  dp[n] = true;

  for (let i = n - 1; i >= 0; i--) {
    for (const word of wordDict) {
      const lastIdx = i + word.length;

      if (lastIdx <= n && s.substring(i, lastIdx) === word) {
        dp[i] = dp[lastIdx];
      }

      if (dp[i]) {
        break;
      }
    }
  }

  return dp[0];
};
