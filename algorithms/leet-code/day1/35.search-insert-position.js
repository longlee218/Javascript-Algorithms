// https://leetcode.com/problems/search-insert-position/

// style 1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let s = 0, e = nums.length - 1
    if (target < nums[s]) return 0
    if (target > nums[e]) return e + 1
    while (s < e) {
        let m = Math.floor(s + (e - s) / 2)
        if (nums[m] < target) s = m + 1
        else e = m
    }
    return s
};

// style 2
var searchInsert2 = function (nums, target) {
    let s = 0, e = nums.length - 1
    if (target < nums[s]) return 0
    if (target > nums[e]) return e + 1
    while (s < e) {
        let m = Math.floor(1 + s + (e - s) / 2)
        if (target < nums[m]) e = m - 1
        else s = m
    }
    return s
}