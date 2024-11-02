function solution(num_list, n) {
    let mod = num_list.length / n;
    let arr = []
    let cnt = 0
    for(let i = 0; i < mod; i++) {
        let tmp = []
        for(let j = 0; j < n; j++) {
            tmp.push(num_list[cnt++])
        }
        arr.push(tmp)
    }
    return arr;
}