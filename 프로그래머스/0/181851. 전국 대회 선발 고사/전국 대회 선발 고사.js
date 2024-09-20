
function cmp(a, b) {
    return a.rank - b.rank
}
function solution(rank, attendance) {
    const arr = []
    for(let id = 0; id < rank.length; id++) {
        if(attendance[id]) {
            arr.push({
            rank: rank[id],
            id
            })
        }   
    }
    arr.sort(cmp)
    console.log(arr)
    return arr[0].id * 10000 + arr[1].id * 100 + arr[2].id
}
