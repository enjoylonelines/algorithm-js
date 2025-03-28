function solution(balls, share) {
    return fact(BigInt(balls)) / (fact(BigInt(balls - share)) * fact(BigInt(share)));
}

function fact(n) {
    if (n === 0n || n === 1n) return 1n;
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}
