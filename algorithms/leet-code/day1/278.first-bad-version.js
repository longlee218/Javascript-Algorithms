/**
 * https://leetcode.com/problems/first-bad-version/
 */

const solution = (isBadVersion) => {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1; r = n;
        while (l < r) {
            const m = Math.floor(l + (r - l) / 2);
            if (!isBadVersion(m)) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return l;
    };
};