/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function (numberOfUsers, events) {
  const mentions = Array(numberOfUsers).fill(0);
  const onlineUntil = Array(numberOfUsers).fill(0);

  const updateOnline = (time) => {
    for (let i = 0; i < numberOfUsers; i++) {
      if (onlineUntil[i] <= time) {
        onlineUntil[i] = 0;
      }
    }
  };

  for (const e of events) {
    const [type, tString] = e;
    const time = Number(tString);

    updateOnline(time);

    if (type === "OFFLINE") {
      const id = Number(e[2]);
      onlineUntil[id] = time + 60;
    } else {
      const mentionStr = e[2];
      const tokens = mentionStr.split(/\s+/);

      for (const token of tokens) {
        if (token === "ALL") {
          for (let i = 0; i < numberOfUsers; i++) {
            mentions[i]++;
          }
        } else if (token === "HERE") {
          for (let i = 0; i < numberOfUsers; i++) {
            if (onlineUntil[i] === 0) mentions[i]++;
          }
        } else if (token.startsWith("id")) {
          const id = Number(token.slice(2));

          if (id >= 0 && id < numberOfUsers) {
            mentions[id]++;
          }
        }
      }
    }
  }

  return mentions;
};
