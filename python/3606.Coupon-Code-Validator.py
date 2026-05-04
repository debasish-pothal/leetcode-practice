class Solution:
    def validateCoupons(self, code: List[str], businessLine: List[str], isActive: List[bool]) -> List[str]:
        order = {
            "electronics": 0,
            "grocery": 1,
            "pharmacy": 2,
            "restaurant": 3,
        }

        valid_code_regex = re.compile(r'^[A-Za-z0-9_]+$')

        valid_coupons = []

        for i in range(len(code)):
            if valid_code_regex.match(code[i]) and businessLine[i] in order and isActive[i]:
                valid_coupons.append({
                    "code": code[i],
                    "businessLine": businessLine[i]
                })

        valid_coupons.sort(key=lambda x: (order[x["businessLine"]], x["code"]))

        return [coupon["code"] for coupon in valid_coupons]