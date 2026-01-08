/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) return "";

  const need = new Map();

  for (const c of t) {
    need.set(c, (need.get(c) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let start = 0;
  let valid = 0;
  let len = Infinity;
  const window = new Map();

  while (right < s.length) {
    const c = s[right];
    right += 1;

    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (need.get(c) === window.get(c)) {
        valid += 1;
      }
    }

    while (valid === need.size) {
      if (right - left < len) {
        len = right - left;
        start = left;
      }

      const d = s[left];
      left += 1;

      if (need.has(d)) {
        if (need.get(d) === window.get(d)) {
          valid -= 1;
        }

        window.set(d, window.get(d) - 1);
      }
    }
  }

  return len === Infinity ? "" : s.substring(start, start + len);
};
