function solution(n) {
    let count = 0;
    if(n < 4) return 0;
    for(let i = 4; i <= n; i++){
        count += cnt(i);
    }
    return count;
}

function cnt(n) {
    for(let i = 2; i < n; i++) {
        if(n % i === 0) return 1; 
    }
    return 0;
}