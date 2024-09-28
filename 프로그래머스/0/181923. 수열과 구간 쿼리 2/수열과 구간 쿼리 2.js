
function solution(arr, queries) {
    const ans = [];
    queries.forEach(([st, en, k],e) => {
        let min = Infinity;
        for(let i = st; i <= en; i++) {
            if(arr[i] > k) {
                min = Math.min(min, arr[i])
            }
        }
        if(min === Infinity) ans.push(-1) 
        else ans.push(min)
    }) 
    return ans;
}