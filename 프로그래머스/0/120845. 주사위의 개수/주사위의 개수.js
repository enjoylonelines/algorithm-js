function solution(box, n) {
    let max_num = 1;
    for(let val of box) {
        let num = Math.floor(val / n)
        max_num *= num
    }
    return max_num
}