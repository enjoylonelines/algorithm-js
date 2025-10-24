function solution(A, B) {
    if(A === B) return 0;
    
    let cnt = 0;
    let len = A.length;
    const arr = A.split('');
    
    while(len--) {
        const char = arr.pop();
        arr.unshift(char);
        const str = arr.join('');

        cnt++;
        if(str === B) {
            return cnt;
        }
    }
    
    return -1;
}