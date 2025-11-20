/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    map.set(key, [str, ...(map.get(key) || [])]);
  }

  return Array.from(map.values());
};
