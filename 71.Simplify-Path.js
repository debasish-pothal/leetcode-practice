/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const pathArr = path.split("/");
  const stack = [];

  for (const p of pathArr) {
    if (p === "." || p === "") {
      continue;
    } else if (p === "..") {
      stack.pop();
    } else {
      stack.push(p);
    }
  }

  return `/${stack.join("/")}`;
};
