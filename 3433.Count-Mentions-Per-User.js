/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function (numberOfUsers, events) {
  events.sort((a, b) => Number(a[1]) - Number(b[1]));
  const mentions = Array(numberOfUsers).fill(0);
  const offlineUntil = Array(numberOfUsers).fill(0);

  const updateOffline = (time) => {
    for (let i = 0; i < numberOfUsers; i++) {
      if (offlineUntil[i] !== 0 && offlineUntil[i] <= time) {
        offlineUntil[i] = 0;
      }
    }
  };

  let i = 0;
  while (i < events.length) {
    const time = Number(events[i][1]);

    // 1) Expire offline users
    updateOffline(time);

    // Gather all events at this timestamp
    const same = [];
    while (i < events.length && Number(events[i][1]) === time) {
      same.push(events[i]);
      i++;
    }

    // 2) Process all OFFLINE first
    for (const e of same) {
      if (e[0] === "OFFLINE") {
        const id = Number(e[2]);
        offlineUntil[id] = time + 60;
      }
    }

    // 3) Then process all MESSAGE
    for (const e of same) {
      if (e[0] === "MESSAGE") {
        const tokens = e[2].split(/\s+/);
        for (const token of tokens) {
          if (token === "ALL") {
            for (let u = 0; u < numberOfUsers; u++) mentions[u]++;
          } else if (token === "HERE") {
            for (let u = 0; u < numberOfUsers; u++) {
              if (offlineUntil[u] === 0) mentions[u]++;
            }
          } else if (token.startsWith("id")) {
            const id = Number(token.slice(2));
            if (id >= 0 && id < numberOfUsers) mentions[id]++;
          }
        }
      }
    }
  }

  return mentions;
};
