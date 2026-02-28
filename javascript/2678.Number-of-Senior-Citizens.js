/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let count = 0;

  for (const detail of details) {
    if (parseInt(detail.substring(11, 13)) > 60) count += 1;
  }

  return count;
};
