/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const result = [];
  potions.sort((a, b) => a - b);

  for (const spell of spells) {
    let index = potions.length;
    let left = 0;
    let right = potions.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const potion_success = spell * potions[mid];

      if (potion_success >= success) {
        right = mid - 1;
        index = mid;
      } else {
        left = mid + 1;
      }
    }

    result.push(potions.length - index);
  }

  return result;
};
