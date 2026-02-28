/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let asteroid of asteroids) {
    while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
      const top = stack.pop();
      const diff = asteroid + top;

      if (diff === 0) {
        asteroid = 0;
      } else if (diff > 0) {
        asteroid = top;
      } else {
        continue;
      }
    }

    if (asteroid) {
      stack.push(asteroid);
    }
  }

  return stack;
};
