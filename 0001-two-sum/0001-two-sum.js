/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
 const dataToReturn = [];
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(nums[i], nums[j])
        dataToReturn.push(i,j);
        return dataToReturn;
      }
    }
  }
};