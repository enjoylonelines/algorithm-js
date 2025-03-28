function solution(balls, share) {
    return combination(balls, share);
}

function combination(n, r) {
    if (r === 0 || n === r) return 1;
    let result = 1;
    for (let i = 0; i < r; i++) {
        result *= (n - i);
        result /= (i + 1);
    }
    return result;
}
