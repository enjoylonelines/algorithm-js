function solution(arr, query) {
    
    query.forEach(q => {
        if(q % 2 === 0) {
            arr = arr.splice(q, arr.length - 1)
        }
        if(q % 2 === 1) {
            arr = arr.splice(0, q + 1)
        }
    })
    return arr
}

function solution(arr, query) {
    for(let i = 0 ; i < query.length ; i ++) {
        const cur = query[i]
        
        if(i%2 === 0) {
            arr.splice(cur+1, arr.length -(cur+1))
        } else {
             arr.splice(0, cur)
        }
    }
    
    return arr
}