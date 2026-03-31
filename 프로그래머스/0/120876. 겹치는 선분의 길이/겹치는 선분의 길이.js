function solution(lines) {
    let ans = 0;
    for(let x = -100; x <= 100; x++) {
        let cnt = 0;
        for(let [start, end] of lines) {
            if(start <= x && x + 1 <= end) cnt++;
        }
        if(cnt >= 2) ans++;
    }
    return ans;
}
