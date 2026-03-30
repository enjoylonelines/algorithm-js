function solution(n) {
    const arr = [];
    for(let i = 1; i < 200; i++) {
        if(i % 3 === 0) continue;
        if((i+'').split('').includes('3')) continue;
        arr.push(i);
    }
    return arr[n - 1];
}