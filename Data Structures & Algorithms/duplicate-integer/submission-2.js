class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (nums.length === 0) return false;

        const map = new Set();

        for (const num of nums) {
            if (map.has(num)) return true;
            map.add(num);
        }

        return false;
    }
}
