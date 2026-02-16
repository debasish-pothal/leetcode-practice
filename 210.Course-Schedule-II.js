/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const preReqMap = new Map();
  const visiting = new Set();
  const visited = new Set();
  const result = [];

  for (let i = 0; i < numCourses; i++) {
    preReqMap.set(i, []);
  }

  for (const [course, prereq] of prerequisites) {
    preReqMap.set(course, [...preReqMap.get(course), prereq]);
  }

  const dfs = (node) => {
    if (visited.has(node)) {
      return true;
    }

    if (visiting.has(node)) {
      return false;
    }

    visiting.add(node);

    const prereqs = preReqMap.get(node);

    for (const prereq of prereqs) {
      if (!dfs(prereq)) {
        return false;
      }
    }

    visiting.delete(node);
    visited.add(node);
    result.push(node);

    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return [];
    }
  }

  return result;
};
