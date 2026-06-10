class MathHelper{
    constructor(){} 
    static add(...nums) {
        let total = 0 ; 
        for(let i = 0 ; i< nums.length ; i++){
            total += nums[i] 
        }
        return total ; 
    }
}

console.log(MathHelper.add(10,20,30,40))