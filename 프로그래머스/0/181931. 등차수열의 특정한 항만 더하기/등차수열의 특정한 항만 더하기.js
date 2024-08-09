function solution(a, d, included) {
    return included.reduce((acc, cur, idx) => {
        const num = a + d*idx
        if (cur) return acc += num
        else return acc
    }, 0)
}
