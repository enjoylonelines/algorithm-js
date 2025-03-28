function solution(balls, share) {
    return Math.round(fact(balls) / (fact(balls - share) * fact(share)));
}

function fact(n) {
    if (n === 0 || n === 1) return 1; // 0! = 1 추가
    return n * fact(n - 1);
}
