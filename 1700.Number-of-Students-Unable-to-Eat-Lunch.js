/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const map = new Map();
  let res = students.length;

  for (const s of students) {
    map.set(s, (map.get(s) || 0) + 1);
  }

  for (const s of sandwiches) {
    if (map.get(s) > 0) {
      res -= 1;
      map.set(s, map.get(s) - 1);
    } else {
      break;
    }
  }

  return res;
};
