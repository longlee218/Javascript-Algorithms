// https://leetcode.com/problems/squares-of-a-sorted-array/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let s = 0, e = nums.length - 1
    const r = new Array(e + 1).fill(0)
    while (s <= e) {
        let [absS, absE] = [Math.abs(nums[s]), Math.abs(nums[e])]
        if (absS > absE) {
            r[e - s] = absS ** 2
            ++s
        } else {
            r[e - s] = absE ** 2
            --e
        }
    }
    return r
};