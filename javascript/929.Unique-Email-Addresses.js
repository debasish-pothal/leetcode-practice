/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const unique = new Set();

  for (const email of emails) {
    let [local, domain] = email.split("@");
    local = local.split("+")[0];
    local = local.replace(/\./g, "");
    unique.add(`${local}@${domain}`);
  }

  return unique.size;
};
