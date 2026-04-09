class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const x=new Map();

        nums.forEach((n)=>x.set(n,(x.get(n)||0)+1))

        for(let [key,value] of x)
        {
            if(value>nums.length/2)
            return key
        }
    }
}
