// https://leetcode.com/problems/rotate-array/
/** 
 * 
 * Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 * /


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums.length === 1) return nums
    if (k > nums.length) k %= nums.length
    const revers = (s, e) => {
        while (s < e) {
            let temp = nums[s]
            nums[s] = nums[e]
            nums[e] = temp
            ++s
            --e
        }
    }
    revers(0, nums.length - 1)
    revers(0, k - 1)
    revers(k, nums.length - 1)
    return nums
};