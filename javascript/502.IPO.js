/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  const projects = [];

  for (let i = 0; i < profits.length; i++) {
    projects.push([capital[i], profits[i]]);
  }

  projects.sort((a, b) => a[0] - b[0]);

  const maxHeap = new MaxPriorityQueue();
  let i = 0;

  for (let j = 0; j < k; j++) {
    while (i < projects.length && projects[i][0] <= w) {
      maxHeap.enqueue(projects[i][1]);
      i += 1;
    }

    if (maxHeap.isEmpty()) {
      break;
    }

    w += maxHeap.dequeue();
  }

  return w;
};
