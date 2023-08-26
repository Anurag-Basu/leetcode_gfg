/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;

  // const uniq = [];
  // nums.forEach((ele) => {
  //   if(!uniq.includes(ele)){
  //     uniq.push(ele)
  //   }
  // })
  // return uniq;
};