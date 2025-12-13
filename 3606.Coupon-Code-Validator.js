/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
  const order = {
    electronics: 0,
    grocery: 1,
    pharmacy: 2,
    restaurant: 3,
  };

  const validCodeRegex = /^[A-Za-z0-9_]+$/;

  const validCoupons = [];

  for (let i = 0; i < code.length; i++) {
    if (
      validCodeRegex.test(code[i]) &&
      order.hasOwnProperty(businessLine[i]) &&
      isActive[i]
    ) {
      validCoupons.push({
        code: code[i],
        businessLine: businessLine[i],
      });
    }
  }

  validCoupons.sort((a, b) => {
    const lineDiff = order[a.businessLine] - order[b.businessLine];
    if (lineDiff !== 0) {
      return lineDiff;
    }

    if (a.code < b.code) return -1;
    if (a.code > b.code) return 1;
    return 0;
  });

  return validCoupons.map((coupon) => coupon.code);
};
