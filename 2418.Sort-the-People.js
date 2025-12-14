/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const people = [];

  for (let i = 0; i < names.length; i++) {
    people.push({ name: names[i], height: heights[i] });
  }

  people.sort((p1, p2) => p2.height - p1.height);

  return people.map((p) => p.name);
};
