/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
 * If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 */

const search = (nums, target) => {
    let start = 0, end = nums.length - 1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return nums[start] === target ? start : -1;
}


// Style 2
const search2 = (nums, target) => {
    let start = 0, end = nums.length - 1;
    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2) + 1;
        if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid;
        }
    }
    return nums[start] === target ? start : -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))
console.log(search2([-1, 0, 3, 5, 9, 12], 2))