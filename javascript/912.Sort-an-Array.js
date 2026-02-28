/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const merge = (arr1, arr2) => {
    const result = [];
    let ptr1 = 0;
    let ptr2 = 0;

    while (ptr1 < arr1.length && ptr2 < arr2.length) {
      if (arr1[ptr1] < arr2[ptr2]) {
        result.push(arr1[ptr1]);
        ptr1 += 1;
      } else {
        result.push(arr2[ptr2]);
        ptr2 += 1;
      }
    }

    while (ptr1 < arr1.length) {
      result.push(arr1[ptr1]);
      ptr1 += 1;
    }

    while (ptr2 < arr2.length) {
      result.push(arr2[ptr2]);
      ptr2 += 1;
    }

    return result;
  };

  const mergeSort = (arr) => {
    if (arr.length === 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const arr1 = mergeSort(arr.slice(0, mid));
    const arr2 = mergeSort(arr.slice(mid));

    return merge(arr1, arr2);
  };

  return mergeSort(nums);
};
