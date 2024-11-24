function solution(array, n) {
    array = array.sort((a,b) => a - b)
    
    let ans = array[0]
    let minAbs = Math.abs(n - array[0])
    
    for(let i = 1; i < array.length; i++) {
        let curAbs = Math.abs(n - array[i])
        if(minAbs > curAbs) {
            minAbs = curAbs;
            ans = array[i];
        }
    }
    return ans;
}
