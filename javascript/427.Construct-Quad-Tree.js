/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var construct = function (grid) {
  const build = (row, col, size) => {
    const firstValue = grid[row][col];
    let isUniform = true;

    for (let r = row; r < row + size; r++) {
      for (let c = col; c < col + size; c++) {
        if (grid[r][c] !== firstValue) {
          isUniform = false;
          break;
        }
      }

      if (!isUniform) {
        break;
      }
    }

    if (isUniform) {
      return new _Node(firstValue === 1, true, null, null, null, null);
    }

    const half = size / 2;

    return new _Node(
      true,
      false,
      build(row, col, half),
      build(row, col + half, half),
      build(row + half, col, half),
      build(row + half, col + half, half),
    );
  };

  return build(0, 0, grid.length);
};
