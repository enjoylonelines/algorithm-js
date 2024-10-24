function solution(arr){
    ans = []
    for(let num of arr) {
        if(ans.length === 0) ans.push(num)
        else if(num === ans[ans.length - 1]) continue;
        else ans.push(num)
    }
    return ans
}