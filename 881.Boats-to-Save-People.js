/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let boats = 0;
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    const weight = people[left] + people[right];

    if (weight <= limit) {
      right -= 1;
      left += 1;
    } else {
      right -= 1;
    }

    boats += 1;
  }

  return boats;
};
