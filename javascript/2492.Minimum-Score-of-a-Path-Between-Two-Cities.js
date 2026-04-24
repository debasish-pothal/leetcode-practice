/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  let result = Infinity;
  const adj_list = new Map();
  const visited = new Set();

  for (const [src, dst, dist] of roads) {
    if (!adj_list.has(src)) adj_list.set(src, []);
    if (!adj_list.has(dst)) adj_list.set(dst, []);

    adj_list.get(src).push([dst, dist]);
    adj_list.get(dst).push([src, dist]);
  }

  const dfs = (node) => {
    if (visited.has(node)) {
      return;
    }

    visited.add(node);

    for (const [dst, dist] of adj_list.get(node)) {
      result = Math.min(result, dist);
      dfs(dst);
    }
  };

  dfs(1);

  return result;
};
