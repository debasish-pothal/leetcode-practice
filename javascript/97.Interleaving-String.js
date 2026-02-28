/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }

  const cache = new Map();

  const helper = (i, j, k) => {
    const key = `${i}-${j}`;

    if (cache.has(key)) {
      return cache.get(key);
    }

    if (k === s3.length) {
      return i === s1.length && j === s2.length;
    }

    let valid = false;

    if (i < s1.length && s1[i] === s3[k]) {
      valid = valid || helper(i + 1, j, k + 1);
    }

    if (j < s2.length && s2[j] === s3[k]) {
      valid = valid || helper(i, j + 1, k + 1);
    }

    cache.set(key, valid);
    return valid;
  };

  return helper(0, 0, 0);
};
