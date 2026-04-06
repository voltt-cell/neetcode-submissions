class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length)
        {
            return false
        }
        const x=new Map()
        for (let n of s)
{
    x.set(n,(x.get(n)||0)+1)
}
        for (let i of t)
        {
            if(!x.has(i))
            return false
            x.set(i,(x.get(i)||0)-1)
            if(x.get(i)===0)
            x.delete(i)
        }
        return true
    }
}
