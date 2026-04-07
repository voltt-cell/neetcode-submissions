class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let x =new Map();
        nums.forEach((n,i)=>x.set(n,i))

        for ( let i=0;i<nums.length;i++)
        {
            let j=target - nums[i]
            if(x.has(j) && x.get(j)!==i)
            return [i,x.get(j)]
        }
    }
}
