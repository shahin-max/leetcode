​
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    let arrlen = nums.length,
        curInd = 0;
​
    if (arrlen < 2) {
        return nums;
    }
​
    for (let i=1; i<arrlen; i++) {
        if ( nums[curInd] !== nums[i] ) {
            curInd++;
            nums[curInd] = nums[i];
        }
    }
​
    return curInd+1;
};
