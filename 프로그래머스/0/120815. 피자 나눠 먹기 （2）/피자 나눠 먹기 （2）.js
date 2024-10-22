function solution(n) {
    let cnt = 1;
    const piece = 6;
    while(cnt * piece % n !== 0) {
        cnt++;
    }
    return cnt;
}