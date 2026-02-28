/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const prereqMap = new Map();
  const visited = new Set();

  for (let i = 0; i < numCourses; i++) {
    prereqMap.set(i, []);
  }

  for (const [course, prereq] of prerequisites) {
    prereqMap.set(course, [...prereqMap.get(course), prereq]);
  }

  const dfs = (course) => {
    if (visited.has(course)) {
      return false;
    }

    if (prereqMap.get(course).length === 0) {
      return true;
    }

    visited.add(course);

    for (const prereq of prereqMap.get(course)) {
      if (!dfs(prereq)) {
        return false;
      }
    }

    visited.delete(course);
    prereqMap.set(course, []);
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }

  return true;
};
