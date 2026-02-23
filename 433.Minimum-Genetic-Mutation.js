/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  const bankSet = new Set(bank);

  if (!bankSet.has(endGene)) return -1;

  const genes = ["A", "C", "G", "T"];
  const q = [[startGene, 0]];
  const visited = new Set([startGene]);

  while (q.length) {
    const [current, steps] = q.shift();

    if (current === endGene) return steps;

    for (let i = 0; i < 8; i++) {
      for (const g of genes) {
        if (current[i] === g) continue;

        const mutated = current.slice(0, i) + g + current.slice(i + 1);

        if (bankSet.has(mutated) && !visited.has(mutated)) {
          visited.add(mutated);
          q.push([mutated, steps + 1]);
        }
      }
    }
  }

  return -1;
};
