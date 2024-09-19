function solution(arr, query) {
    
    query.forEach((cur, idx) => {
        if(idx % 2 === 1) {
            arr = arr.slice(cur, arr.length)
        }
        if(idx % 2 === 0) {
            arr = arr.slice(0, cur + 1)
        }
    })
    return arr
    
}

