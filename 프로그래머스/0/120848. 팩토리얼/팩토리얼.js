function fact(n) {
    if(n === 1 || n === 0) return 1;
    return n * fact(n - 1)
}
function solution(n) {
    for(let i = 10; i >= 1; i--) {
        if(fact(i) > n) continue; 
        else return i;
    }
}
    