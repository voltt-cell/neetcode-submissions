class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length === 0) return false;
        const x=new Map()
        nums.forEach((n)=>x.set(n,(x.get(n)||0)+1))

        for(const [key,value] of x)
        {
            if(value>1)
            return true
        }
        return false
    }
}
