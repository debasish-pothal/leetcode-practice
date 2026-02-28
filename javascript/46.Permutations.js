/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let perms = [[]];

  for (const num of nums) {
    const newPerms = [];

    for (const perm of perms) {
      for (let i = 0; i <= perm.length; i++) {
        const permCopy = perm.slice();
        permCopy.splice(i, 0, num);
        newPerms.push(permCopy);
      }
    }

    perms = newPerms;
  }

  return perms;
};
