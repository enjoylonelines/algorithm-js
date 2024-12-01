function solution(my_str, n) {
    const len = Math.ceil(my_str.length / n)
    const arr = []
    for(let i = 0; i < len; i++) {
        let copy = my_str;
        arr.push(copy.slice(i*n, (i+1)*n));
    }
    return arr
}