/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);

  const ends = [];

  for (const e of events) {
    ends.push([e[1], e[2]]);
  }

  ends.sort((a, b) => a[0] - b[0]);

  let singleMaxVal = 0;
  let doubleMaxVal = 0;
  let prevMaxVal = 0;
  let j = 0;

  for (let i = 0; i < events.length; i++) {
    while (j < ends.length && ends[j][0] < events[i][0]) {
      prevMaxVal = Math.max(prevMaxVal, ends[j][1]);
      j += 1;
    }

    doubleMaxVal = Math.max(doubleMaxVal, events[i][2] + prevMaxVal);

    singleMaxVal = Math.max(singleMaxVal, events[i][2]);
  }

  return Math.max(singleMaxVal, doubleMaxVal);
};
